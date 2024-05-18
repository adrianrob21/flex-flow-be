import { Body, Controller, Post, Get, Query } from "@nestjs/common";
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

  @Get()
  getWorkouts(@Query("userId") userId: string): Promise<WorkoutDetails[]> {
    return this.workoutService.getWorkouts(userId);
  }
}
