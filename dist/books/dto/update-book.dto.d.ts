import { CreateBookDto } from './create-book.dto';
declare const UpdateBookDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateBookDto>>;
export declare class UpdateBookDto extends UpdateBookDto_base {
    id: string;
    title: string;
    authorId: string;
}
export {};
