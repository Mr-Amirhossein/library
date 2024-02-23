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
exports.AuthorsService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_prisma_1 = require("nestjs-prisma");
let AuthorsService = class AuthorsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createAuthor(createAuthorDto) {
        const { firstName, lastName } = createAuthorDto;
        await this.prisma.author.create({
            data: {
                firstName,
                lastName,
            },
        });
        return 'create author was successful';
    }
    async getAuthors() {
        return await this.prisma.author.findMany({
            select: { firstName: true, lastName: true, id: true },
        });
    }
    async getBooksByAuthorId(id) {
        const author = await this.prisma.author.findUnique({
            where: { id },
            select: {
                books: {
                    select: {
                        title: true,
                        id: true,
                        createdAt: true,
                        updatedAt: true,
                    },
                },
            },
        });
        if (!author) {
            throw new common_1.ForbiddenException('Author not found');
        }
        return { books: author.books };
    }
    async getMyAuthor(authorId) {
        const user = await this.prisma.author.findUnique({
            where: { id: authorId },
            select: {
                firstName: true,
                lastName: true,
            },
        });
        if (!user) {
            throw new common_1.ForbiddenException('Author not found');
        }
        return {
            user: {
                firstName: user.firstName,
                lastName: user.lastName,
            },
        };
    }
    async updateAuthor(authorId, updateAuthorDto) {
        const { firstName, lastName } = updateAuthorDto;
        const author = await this.prisma.author.findUnique({
            where: { id: authorId },
        });
        if (!author) {
            throw new common_1.ForbiddenException('Author not found');
        }
        await this.prisma.author.update({
            where: { id: authorId },
            data: {
                firstName,
                lastName,
            },
        });
        return 'update author was successful';
    }
    async removeAuthor(authorId) {
        const Author = await this.prisma.author.findUnique({
            where: { id: authorId },
        });
        if (!Author) {
            throw new common_1.ForbiddenException('Author not found');
        }
        await this.prisma.author.delete({
            where: { id: authorId },
        });
        return `Author with id #${authorId} has been deleted`;
    }
};
exports.AuthorsService = AuthorsService;
exports.AuthorsService = AuthorsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nestjs_prisma_1.PrismaService])
], AuthorsService);
//# sourceMappingURL=authors.service.js.map