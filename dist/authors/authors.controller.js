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
exports.AuthorsController = void 0;
const common_1 = require("@nestjs/common");
const authors_service_1 = require("./authors.service");
const create_author_dto_1 = require("./dto/create-author.dto");
const update_author_dto_1 = require("./dto/update-author.dto");
const swagger_1 = require("@nestjs/swagger");
const get_authorsBooks_request_dto_1 = require("./dto/get-authorsBooks-request.dto");
const get_authorsBooks_response_dto_1 = require("./dto/get-authorsBooks-response.dto");
const get_authorById_request_dto_copy_1 = require("./dto/get-authorById-request.dto copy");
const get_authorById_response_dto_1 = require("./dto/get-authorById-response.dto");
const update_author_request_dto_1 = require("./dto/update-author-request.dto");
const delete_author_request_dto_1 = require("./dto/delete-author-request.dto");
let AuthorsController = class AuthorsController {
    constructor(authorsService) {
        this.authorsService = authorsService;
    }
    createAuthor(createAuthorDto) {
        return this.authorsService.createAuthor(createAuthorDto);
    }
    getBooksByAuthorId(payload) {
        return this.authorsService.getBooksByAuthorId(payload.authorId);
    }
    getAuthors() {
        return this.authorsService.getAuthors();
    }
    getMyAuthor(payload) {
        return this.authorsService.getMyAuthor(payload.authorId);
    }
    updateAuthor(payload, updateAuthorDto) {
        return this.authorsService.updateAuthor(payload.authorId, updateAuthorDto);
    }
    removeAuthor(payload) {
        return this.authorsService.removeAuthor(payload.authorId);
    }
};
exports.AuthorsController = AuthorsController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'ساخت کتاب جدید' }),
    (0, swagger_1.ApiOkResponse)({
        type: [create_author_dto_1.CreateAuthorDto],
        description: 'The author has been successfully created.',
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Internal server error.',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_author_dto_1.CreateAuthorDto]),
    __metadata("design:returntype", void 0)
], AuthorsController.prototype, "createAuthor", null);
__decorate([
    (0, common_1.Get)(':authorId/books'),
    (0, swagger_1.ApiOperation)({ summary: 'گرفتن لیست کتاب های نویسنده با شناسه کتاب' }),
    (0, swagger_1.ApiOkResponse)({
        type: get_authorsBooks_response_dto_1.GetAuthorsBocoksResponseDto,
        description: 'The books has been successfully returned.',
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_authorsBooks_request_dto_1.GetAuthorsBooksRequestDto]),
    __metadata("design:returntype", void 0)
], AuthorsController.prototype, "getBooksByAuthorId", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'گرفتن لیست نویسنده ها' }),
    (0, swagger_1.ApiOkResponse)({
        type: [create_author_dto_1.CreateAuthorDto],
        description: 'لیست نویسنده ها با موفقیت دریافت  شد',
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Internal server error.',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuthorsController.prototype, "getAuthors", null);
__decorate([
    (0, common_1.Get)(':authorId'),
    (0, swagger_1.ApiOperation)({ summary: 'گرفتن نویسنده از طریق شناسه' }),
    (0, swagger_1.ApiOkResponse)({
        type: [get_authorById_response_dto_1.GetAuthorByIdResponsetDto],
        description: 'نویسنده با موفقیت برگشت داده شد',
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Internal server error.',
    }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_authorById_request_dto_copy_1.GetAuthorByIdRequestDto]),
    __metadata("design:returntype", void 0)
], AuthorsController.prototype, "getMyAuthor", null);
__decorate([
    (0, common_1.Put)(':authorId'),
    (0, swagger_1.ApiOperation)({ summary: 'بروزرسانی نویسنده با شناسه' }),
    (0, swagger_1.ApiOkResponse)({
        type: update_author_dto_1.UpdateAuthorDto,
        description: 'نویسنده با موفقیت بروزرسانی شد',
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Internal server error.',
    }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_author_request_dto_1.UpdateAuthorRequsetDto,
        update_author_dto_1.UpdateAuthorDto]),
    __metadata("design:returntype", void 0)
], AuthorsController.prototype, "updateAuthor", null);
__decorate([
    (0, common_1.Delete)(':authorId'),
    (0, swagger_1.ApiOperation)({ summary: 'حذف کتاب با شناسه' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'حذف کتاب  با موفقیت انجام شد',
    }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    (0, swagger_1.ApiResponse)({
        status: 500,
        description: 'Internal server error.',
    }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_author_request_dto_1.DeleteAuthorRequestDto]),
    __metadata("design:returntype", void 0)
], AuthorsController.prototype, "removeAuthor", null);
exports.AuthorsController = AuthorsController = __decorate([
    (0, swagger_1.ApiTags)('authors'),
    (0, common_1.Controller)('authors'),
    __metadata("design:paramtypes", [authors_service_1.AuthorsService])
], AuthorsController);
//# sourceMappingURL=authors.controller.js.map