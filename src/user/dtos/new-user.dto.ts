import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class NewUserDTO {
  @IsString()
  @ApiProperty()
  fullName: string;

  @IsString()
  @ApiProperty()
  @IsEmail()
  email: string;

  @IsString()
  @ApiProperty()
  password: string;
}
