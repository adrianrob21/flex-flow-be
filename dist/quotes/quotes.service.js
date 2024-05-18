"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuotesService = void 0;
const mongoose_1 = require("mongoose");
const common_1 = require("@nestjs/common");
const quotes_schema_1 = require("./quotes.schema");
const mongoose_2 = require("@nestjs/mongoose");
const common_2 = require("@nestjs/common");
let QuotesService = class QuotesService {
    constructor(quoteModel) {
        this.quoteModel = quoteModel;
    }
    async createQuote(quote) {
        const { quote: quoteValue, author, userId } = quote;
        const newQuote = new this.quoteModel({
            quote: quoteValue,
            userId,
            author,
        });
        return newQuote.save();
    }
    async deleteQuote(id) {
        const quote = await this.quoteModel.findById(id).exec();
        if (!quote) {
            throw new common_2.HttpException({ type: "quoteNotFound" }, common_2.HttpStatus.NOT_FOUND);
        }
        return quote.deleteOne();
    }
    async getQuotes(userId) {
        const quotes = await this.quoteModel.find({ userId }).exec();
        return quotes;
    }
};
exports.QuotesService = QuotesService;
exports.QuotesService = QuotesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(quotes_schema_1.CreateQuote.name)),
    __metadata("design:paramtypes", [mongoose_1.Model])
], QuotesService);
//# sourceMappingURL=quotes.service.js.map