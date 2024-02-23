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
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_prisma_1 = require("nestjs-prisma");
let BooksService = class BooksService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createBookDto) {
        const { title, authorId } = createBookDto;
        await this.prisma.books.create({
            data: {
                title,
                authorId,
            },
        });
        return 'کتاب با موفقیت ساخته شد';
    }
    async getAllBooks() {
        return this.prisma.books.findMany({
            select: { title: true, authorId: true },
        });
    }
    async getBookById(bookId) {
        const book = await this.prisma.books.findUnique({
            where: { id: bookId },
            select: {
                title: true,
                authorId: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        if (!book) {
            throw new common_1.ForbiddenException('Book not found');
        }
        return {
            book: {
                title: book.title,
                authorId: book.authorId,
                createAt: book.createdAt,
                updateAt: book.updatedAt,
            },
        };
    }
    async updateBook(bookId, updateBookDto) {
        const { title, authorId } = updateBookDto;
        const book = await this.prisma.books.findUnique({
            where: { id: bookId },
        });
        if (!book) {
            throw new common_1.ForbiddenException('Book not found');
        }
        await this.prisma.books.update({
            where: { id: bookId },
            data: {
                title,
                authorId,
            },
        });
        return 'update book was successful';
    }
    async remove(bookId) {
        const book = await this.prisma.books.findUnique({
            where: { id: bookId },
        });
        if (!book) {
            throw new common_1.ForbiddenException('Book not found');
        }
        await this.prisma.books.delete({
            where: { id: bookId },
        });
        return 'delete book was successful';
    }
};
exports.BooksService = BooksService;
exports.BooksService = BooksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nestjs_prisma_1.PrismaService])
], BooksService);
//# sourceMappingURL=books.service.js.map