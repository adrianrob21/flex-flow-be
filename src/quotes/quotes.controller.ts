import {
  Controller,
  Post,
  Body,
  Delete,
  Headers,
  Param,
  Get,
} from "@nestjs/common";
import { NewQuoteDTO } from "./dtos/new-quote.dto";
import { QuotesService } from "./quotes.service";
import { QuoteDetailsInterface } from "./quote-details.interface";

@Controller("quotes")
export class QuotesController {
  constructor(private quotesService: QuotesService) {}

  @Post()
  createQuote(
    @Body() body: NewQuoteDTO,
    @Headers() headers: Record<string, string>
  ): Promise<QuoteDetailsInterface> | null {
    const uid = headers["uid"];

    return this.quotesService.createQuote({ ...body, userId: uid });
  }

  @Delete(":id")
  deleteQuote(@Param("id") id: string): Promise<{ message: string } | null> {
    return this.quotesService.deleteQuote(id);
  }

  @Get()
  getQuotes(
    @Headers() headers: Record<string, string>
  ): Promise<QuoteDetailsInterface[] | null> {
    const userId = headers["uid"];

    return this.quotesService.getQuotes(userId);
  }
}
