import { ApiProperty } from "@nestjs/swagger";

export class NewWorkoutDTO {
  @ApiProperty()
  name: string;

  userId: string;
}
