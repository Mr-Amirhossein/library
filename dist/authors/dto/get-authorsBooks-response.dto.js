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
exports.GetAuthorsBocoksResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_book_dto_1 = require("../../books/dto/create-book.dto");
class GetAuthorsBocoksResponseDto {
}
exports.GetAuthorsBocoksResponseDto = GetAuthorsBocoksResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [create_book_dto_1.CreateBookDto],
        description: 'لیست کتاب های نویسنده',
    }),
    __metadata("design:type", Array)
], GetAuthorsBocoksResponseDto.prototype, "books", void 0);
//# sourceMappingURL=get-authorsBooks-response.dto.js.map