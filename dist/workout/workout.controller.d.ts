import { WorkoutService } from "./workout.service";
import { NewWorkoutDTO } from "./dtos/new-workout.dto";
import { WorkoutDetails } from "./workout-details.interface";
export declare class WorkoutController {
    private workoutService;
    constructor(workoutService: WorkoutService);
    createWorkout(workout: NewWorkoutDTO, headers: Record<string, string>): Promise<WorkoutDetails | null>;
    getWorkouts(headers: Record<string, string>): Promise<WorkoutDetails[] | null>;
    deleteWorkout(id: string): Promise<any>;
}
