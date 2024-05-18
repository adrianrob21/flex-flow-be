import { Body, Controller, Post, Get, Query, UseGuards } from "@nestjs/common";
import { WorkoutService } from "./workout.service";

import { WorkoutDetails } from "./workout-details.interface";

import { NewWorkoutDTO } from "./dtos/new-workout.dto";
import { JwtGuard } from "src/auth/guards/jwt.guard";

@Controller("workouts")
export class WorkoutController {
  constructor(private workoutService: WorkoutService) {}

  @UseGuards(JwtGuard)
  @Post()
  createWorkout(
    @Body() workout: NewWorkoutDTO
  ): Promise<WorkoutDetails | null> {
    return this.workoutService.createWorkout(workout);
  }

  @UseGuards(JwtGuard)
  @Get()
  getWorkouts(
    @Query("userId") userId: string
  ): Promise<WorkoutDetails[] | null> {
    return this.workoutService.getWorkouts(userId);
  }
}
