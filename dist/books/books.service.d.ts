import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'nestjs-prisma';
export declare class BooksService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createBookDto: CreateBookDto): Promise<string>;
    getAllBooks(): Promise<{
        title: string;
        authorId: string;
    }[]>;
    getBookById(bookId: string): Promise<{
        book: {
            title: string;
            authorId: string;
            createAt: Date;
            updateAt: Date;
        };
    }>;
    updateBook(bookId: string, updateBookDto: UpdateBookDto): Promise<string>;
    remove(bookId: string): Promise<string>;
}
