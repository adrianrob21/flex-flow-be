import { Module } from "@nestjs/common";

import { QuotesService } from "./quotes.service";
import { QuotesController } from "./quotes.controller";
import { MongooseModule } from "@nestjs/mongoose";
import { CreateQuote, CreateQuoteSchema } from "./quotes.schema";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: CreateQuote.name, schema: CreateQuoteSchema },
    ]),
  ],
  controllers: [QuotesController],
  providers: [QuotesService],
  exports: [QuotesService],
})
export class QuotesModule {}
