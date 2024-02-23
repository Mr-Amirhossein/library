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
exports.GetWalletByIdResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class GetWalletByIdResponseDto {
}
exports.GetWalletByIdResponseDto = GetWalletByIdResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: 'موجودی کیف پول',
    }),
    __metadata("design:type", Number)
], GetWalletByIdResponseDto.prototype, "balance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Number,
        description: 'موجودی قابل برداشت',
    }),
    __metadata("design:type", Number)
], GetWalletByIdResponseDto.prototype, "withdrawalBalance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'شناسه صاحب کیف پول',
    }),
    __metadata("design:type", String)
], GetWalletByIdResponseDto.prototype, "authorId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date,
        description: 'تاریخ ایجاد کیف پول',
    }),
    __metadata("design:type", Date)
], GetWalletByIdResponseDto.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: Date,
        description: 'تاریخ به روز رسانی کیف پول',
    }),
    __metadata("design:type", Date)
], GetWalletByIdResponseDto.prototype, "updatedAt", void 0);
//# sourceMappingURL=get-walletById-response.dto.js.map