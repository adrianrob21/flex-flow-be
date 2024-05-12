import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Cars {
  @Prop()
  name: string;

  @Prop()
  year: string;

  @Prop()
  model: string;
}

export const CarsSchema = SchemaFactory.createForClass(Cars);
