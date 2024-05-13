import { IsString } from "class-validator";

export class NewUserDTO {
  @IsString()
  fullName: string;

  @IsString()
  email: string;

  @IsString()
  password: string;
}
