import { ApiProperty } from "@nestjs/swagger";
import { WorkoutDetails } from "../workout-details.interface";

export class WorkoutsDTO {
  @ApiProperty()
  workouts: WorkoutDetails[];
}
