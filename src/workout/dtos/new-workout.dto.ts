import { ApiProperty } from "@nestjs/swagger";

export class NewWorkoutDTO {
  @ApiProperty()
  name: string;
  @ApiProperty()
  userId: string;
}
