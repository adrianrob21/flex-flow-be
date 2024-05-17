import { Body, Controller, Post } from "@nestjs/common";
import { WorkoutService } from "./workout.service";
import { WorkoutDetails } from "./workout-details.interface";
import { NewWorkoutDTO } from "./dtos/new-workout.dto";

@Controller("workouts")
export class WorkoutController {
  constructor(private workoutService: WorkoutService) {}

  @Post("create")
  createWorkout(
    @Body() workout: NewWorkoutDTO
  ): Promise<WorkoutDetails> | null {
    return this.workoutService.createWorkout(workout);
  }
}
