import { NewQuoteDTO } from "./dtos/new-quote.dto";
import { QuotesService } from "./quotes.service";
import { QuoteDetailsInterface } from "./quote-details.interface";
export declare class QuotesController {
    private quotesService;
    constructor(quotesService: QuotesService);
    createQuote(body: NewQuoteDTO, headers: Record<string, string>): Promise<QuoteDetailsInterface> | null;
    deleteQuote(id: string): Promise<{
        message: string;
    } | null>;
    getQuotes(headers: Record<string, string>): Promise<QuoteDetailsInterface[] | null>;
}
