import { Author } from '@prisma/client';
export declare class AuthorEntity implements Author {
    id: string;
    firstName: string;
    lastName: string;
    createdAt: Date;
    updatedAt: Date;
    books: [];
}
