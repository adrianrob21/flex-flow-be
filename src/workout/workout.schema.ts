import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IsString } from "class-validator";
import { Document } from "mongoose";

export type WorkoutDocument = Workout & Document;

@Schema()
export class Workout {
  @IsString()
  @Prop({ required: true })
  name: string;
  @IsString()
  @Prop({ required: true })
  userId: string;
}

export const WorkoutSchema = SchemaFactory.createForClass(Workout);
