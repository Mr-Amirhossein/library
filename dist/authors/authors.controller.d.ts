import { AuthorsService } from './authors.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { GetAuthorsBooksRequestDto } from './dto/get-authorsBooks-request.dto';
import { GetAuthorByIdRequestDto } from './dto/get-authorById-request.dto copy';
import { UpdateAuthorRequsetDto } from './dto/update-author-request.dto';
import { DeleteAuthorRequestDto } from './dto/delete-author-request.dto';
export declare class AuthorsController {
    private readonly authorsService;
    constructor(authorsService: AuthorsService);
    createAuthor(createAuthorDto: CreateAuthorDto): Promise<string>;
    getBooksByAuthorId(payload: GetAuthorsBooksRequestDto): Promise<{
        books: {
            title: string;
            createdAt: Date;
            updatedAt: Date;
            id: string;
        }[];
    }>;
    getAuthors(): Promise<{
        id: string;
        firstName: string;
        lastName: string;
    }[]>;
    getMyAuthor(payload: GetAuthorByIdRequestDto): Promise<{
        user: {
            firstName: string;
            lastName: string;
        };
    }>;
    updateAuthor(payload: UpdateAuthorRequsetDto, updateAuthorDto: UpdateAuthorDto): Promise<string>;
    removeAuthor(payload: DeleteAuthorRequestDto): Promise<string>;
}
