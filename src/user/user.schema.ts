import { Document } from "mongoose";
import { IsEmail } from "class-validator";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  @ApiProperty()
  fullName: string;

  @ApiProperty()
  @IsEmail()
  @Prop({ required: true, unique: true })
  email: string;

  @ApiProperty()
  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
