import { Author, Books } from '@prisma/client';
export declare class BookEntity implements Books {
    id: string;
    title: string;
    authorId: string;
    author: Author;
    createdAt: Date;
    updatedAt: Date;
}
