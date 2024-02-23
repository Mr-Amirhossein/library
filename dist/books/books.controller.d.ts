import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { GetBookByIdRequestDto } from './dto/get-bookById-request.dto';
export declare class BooksController {
    private readonly booksService;
    constructor(booksService: BooksService);
    create(createBookDto: CreateBookDto): Promise<string>;
    getAllBooks(): Promise<{
        title: string;
        authorId: string;
    }[]>;
    getBookById(payload: GetBookByIdRequestDto): Promise<{
        book: {
            title: string;
            authorId: string;
            createAt: Date;
            updateAt: Date;
        };
    }>;
    update(palpoad: GetBookByIdRequestDto, updateBookDto: UpdateBookDto): Promise<string>;
    remove(payload: GetBookByIdRequestDto): Promise<string>;
}
