import { NewQuoteDTO } from "./dtos/new-quote.dto";
import { QuotesService } from "./quotes.service";
import { QuoteDetailsInterface } from "./quote-details.interface";
export declare class QuotesController {
    private quotesService;
    constructor(quotesService: QuotesService);
    createQuote(body: NewQuoteDTO): Promise<QuoteDetailsInterface> | null;
    deleteQuote(id: string): Promise<{
        message: string;
    }>;
    getQuotes(userId: string): Promise<QuoteDetailsInterface[]>;
}
