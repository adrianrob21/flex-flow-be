import { WorkoutService } from "./workout.service";
import { WorkoutDetails } from "./workout-details.interface";
import { NewWorkoutDTO } from "./dtos/new-workout.dto";
export declare class WorkoutController {
    private workoutService;
    constructor(workoutService: WorkoutService);
    createWorkout(workout: NewWorkoutDTO): Promise<WorkoutDetails | null>;
    getWorkouts(userId: string): Promise<WorkoutDetails[] | null>;
    deleteWorkout(id: string): Promise<any>;
}
