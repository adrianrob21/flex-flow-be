/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from "mongoose";
import { CreateQuote } from "./quotes.schema";
import { NewQuoteDTO } from "./dtos/new-quote.dto";
import { CreateQuoteDocument } from "./quotes.schema";
import { QuoteDetailsInterface } from "./quote-details.interface";
export declare class QuotesService {
    private readonly quoteModel;
    constructor(quoteModel: Model<CreateQuoteDocument>);
    createQuote(quote: Readonly<NewQuoteDTO>): Promise<QuoteDetailsInterface>;
    deleteQuote(id: string): Promise<any>;
    getQuotes(userId: string): Promise<(import("mongoose").Document<unknown, {}, CreateQuoteDocument> & CreateQuote & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
}
