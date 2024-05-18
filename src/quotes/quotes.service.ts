import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { CreateQuote } from "./quotes.schema";
import { InjectModel } from "@nestjs/mongoose";
import { NewQuoteDTO } from "./dtos/new-quote.dto";
import { CreateQuoteDocument } from "./quotes.schema";
import { HttpException, HttpStatus } from "@nestjs/common";
import { QuoteDetailsInterface } from "./quote-details.interface";

@Injectable()
export class QuotesService {
  constructor(
    @InjectModel(CreateQuote.name)
    private readonly quoteModel: Model<CreateQuoteDocument>
  ) {}
  async createQuote(
    quote: Readonly<NewQuoteDTO>
  ): Promise<QuoteDetailsInterface> {
    const { quote: quoteValue, author, userId } = quote;

    const newQuote = new this.quoteModel({
      quote: quoteValue,
      userId,
      author,
    });

    return newQuote.save();
  }

  async deleteQuote(id: string): Promise<any> {
    const quote = await this.quoteModel.findById(id).exec();

    if (!quote) {
      throw new HttpException({ type: "quoteNotFound" }, HttpStatus.NOT_FOUND);
    }

    return quote.deleteOne();
  }

  async getQuotes(userId: string) {
    const quotes = await this.quoteModel.find({ userId }).exec();

    return quotes;
  }
}
