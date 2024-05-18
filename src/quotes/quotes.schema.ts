import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type CreateQuoteDocument = CreateQuote & Document;

@Schema()
export class CreateQuote {
  @Prop({ isRequired: true })
  quote: string;

  @Prop({ isRequired: true })
  userId: string;

  @Prop({ isRequired: true })
  author: string;
}

export const CreateQuoteSchema = SchemaFactory.createForClass(CreateQuote);
