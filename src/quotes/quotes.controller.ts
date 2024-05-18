import {
  Controller,
  Post,
  Body,
  Delete,
  Param,
  Get,
  Query,
} from "@nestjs/common";
import { NewQuoteDTO } from "./dtos/new-quote.dto";
import { QuotesService } from "./quotes.service";
import { QuoteDetailsInterface } from "./quote-details.interface";

@Controller("quotes")
export class QuotesController {
  constructor(private quotesService: QuotesService) {}

  @Post()
  createQuote(
    @Body() body: NewQuoteDTO
  ): Promise<QuoteDetailsInterface> | null {
    return this.quotesService.createQuote(body);
  }

  @Delete(":id")
  deleteQuote(@Param("id") id: string): Promise<{ message: string } | null> {
    return this.quotesService.deleteQuote(id);
  }

  @Get()
  getQuotes(
    @Query("userId") userId: string
  ): Promise<QuoteDetailsInterface[] | null> {
    return this.quotesService.getQuotes(userId);
  }
}
