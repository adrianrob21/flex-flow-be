import {
  Injectable,
  HttpException,
  HttpStatus,
  ConsoleLogger,
  Logger,
} from "@nestjs/common";
import { Workout, WorkoutDocument } from "./workout.schema";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { NewWorkoutDTO } from "./dtos/new-workout.dto";
import { WorkoutDetails } from "./workout-details.interface";

@Injectable()
export class WorkoutService {
  constructor(
    @InjectModel(Workout.name)
    private readonly workoutModel: Model<WorkoutDocument>
  ) {}

  async createWorkout(
    workout: Readonly<NewWorkoutDTO>
  ): Promise<WorkoutDetails> {
    const { name, userId } = workout;
    const newWorkout = new this.workoutModel({
      name,
      userId,
    });

    return newWorkout.save();
  }

  async getWorkouts(userId: string) {
    return this.workoutModel.find({ userId }).exec();
  }

  async deleteWorkout(id: string): Promise<any> {
    const workoutToDelete = await this.workoutModel.findById(id).exec();

    if (!workoutToDelete) {
      throw new HttpException(
        { type: "notFound", resource: "workout" },
        HttpStatus.NOT_FOUND
      );
    }

    return workoutToDelete.deleteOne();
  }
}
