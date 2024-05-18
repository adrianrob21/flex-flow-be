import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class NewUserDTO {
  @IsString()
  @ApiProperty()
  fullName: string;

  @IsString()
  @ApiProperty()
  email: string;

  @IsString()
  @ApiProperty()
  password: string;
}
