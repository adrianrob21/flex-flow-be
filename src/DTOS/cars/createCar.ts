import { IsNumber, IsString } from "class-validator";

export class CreateCarDTO {
  @IsString()
  name: string;

  @IsString()
  year: string | number;

  @IsString()
  model: string;
}
