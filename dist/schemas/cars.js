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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarsSchema = exports.Cars = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let Cars = class Cars {
};
exports.Cars = Cars;
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Cars.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Cars.prototype, "year", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Cars.prototype, "model", void 0);
exports.Cars = Cars = __decorate([
    (0, mongoose_1.Schema)()
], Cars);
exports.CarsSchema = mongoose_1.SchemaFactory.createForClass(Cars);
//# sourceMappingURL=cars.js.map