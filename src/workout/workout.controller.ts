import {
  Body,
  Controller,
  Post,
  Get,
  Query,
  UseGuards,
  Headers,
  Delete,
  Param,
  Req,
  Logger,
} from "@nestjs/common";
import { WorkoutService } from "./workout.service";
import { JwtGuard } from "src/auth/guards/jwt.guard";
import { NewWorkoutDTO } from "./dtos/new-workout.dto";
import { WorkoutDetails } from "./workout-details.interface";

@Controller("workouts")
export class WorkoutController {
  constructor(private workoutService: WorkoutService) {}

  @UseGuards(JwtGuard)
  @Post()
  createWorkout(
    @Body() workout: NewWorkoutDTO,
    @Headers() headers: Record<string, string>
  ): Promise<WorkoutDetails | null> {
    const uid = headers["uid"];

    return this.workoutService.createWorkout({ ...workout, userId: uid });
  }

  @UseGuards(JwtGuard)
  @Get()
  getWorkouts(
    @Headers() headers: Record<string, string>
  ): Promise<WorkoutDetails[] | null> {
    const uid = headers["uid"];
    return this.workoutService.getWorkouts(uid);
  }

  @UseGuards(JwtGuard)
  @Delete(":id")
  deleteWorkout(@Param("id") id: string) {
    return this.workoutService.deleteWorkout(id);
  }
}
