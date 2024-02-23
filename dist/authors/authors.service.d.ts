import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { PrismaService } from 'nestjs-prisma';
export declare class AuthorsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    createAuthor(createAuthorDto: CreateAuthorDto): Promise<string>;
    getAuthors(): Promise<{
        id: string;
        firstName: string;
        lastName: string;
    }[]>;
    getBooksByAuthorId(id: string): Promise<{
        books: {
            title: string;
            createdAt: Date;
            updatedAt: Date;
            id: string;
        }[];
    }>;
    getMyAuthor(authorId: string): Promise<{
        user: {
            firstName: string;
            lastName: string;
        };
    }>;
    updateAuthor(authorId: string, updateAuthorDto: UpdateAuthorDto): Promise<string>;
    removeAuthor(authorId: string): Promise<string>;
}
