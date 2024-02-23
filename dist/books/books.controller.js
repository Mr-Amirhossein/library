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
exports.BooksController = void 0;
const common_1 = require("@nestjs/common");
const books_service_1 = require("./books.service");
const create_book_dto_1 = require("./dto/create-book.dto");
const update_book_dto_1 = require("./dto/update-book.dto");
const swagger_1 = require("@nestjs/swagger");
const get_bookById_request_dto_1 = require("./dto/get-bookById-request.dto");
const get_bookById_response_dto_1 = require("./dto/get-bookById-response.dto");
let BooksController = class BooksController {
    constructor(booksService) {
        this.booksService = booksService;
    }
    create(createBookDto) {
        return this.booksService.create(createBookDto);
    }
    getAllBooks() {
        return this.booksService.getAllBooks();
    }
    getBookById(payload) {
        return this.booksService.getBookById(payload.bookId);
    }
    update(palpoad, updateBookDto) {
        return this.booksService.updateBook(palpoad.bookId, updateBookDto);
    }
    remove(payload) {
        return this.booksService.remove(payload.bookId);
    }
};
exports.BooksController = BooksController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'ساخت کتاب ' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'ساخت کتاب با موفقیت انجام شد',
        type: create_book_dto_1.CreateBookDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Internal server error.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_book_dto_1.CreateBookDto]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'گرفتن لیست تمام کتاب ها' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'لیست کتاب ها',
        type: [create_book_dto_1.CreateBookDto],
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Internal server error.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "getAllBooks", null);
__decorate([
    (0, common_1.Get)(':bookId'),
    (0, swagger_1.ApiOperation)({ summary: 'گرفتن کتاب با شناسه' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'کتاب با شناسه',
        type: get_bookById_response_dto_1.GetBookByIdResponseDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Internal server error.',
    }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_bookById_request_dto_1.GetBookByIdRequestDto]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "getBookById", null);
__decorate([
    (0, common_1.Put)(':bookId'),
    (0, swagger_1.ApiOperation)({ summary: 'بروزرسانی کتاب با شناسه' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'کتاب با شناسه',
        type: update_book_dto_1.UpdateBookDto,
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Internal server error.',
    }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_bookById_request_dto_1.GetBookByIdRequestDto,
        update_book_dto_1.UpdateBookDto]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':bookId'),
    (0, swagger_1.ApiOperation)({ summary: 'حذف کتاب با شناسه' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'کتاب با شناسه با موفقیت حذف شد',
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Internal server error.',
    }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_bookById_request_dto_1.GetBookByIdRequestDto]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "remove", null);
exports.BooksController = BooksController = __decorate([
    (0, swagger_1.ApiTags)('books'),
    (0, common_1.Controller)('books'),
    __metadata("design:paramtypes", [books_service_1.BooksService])
], BooksController);
//# sourceMappingURL=books.controller.js.map