import { CreateAuthorDto } from './create-author.dto';
declare const UpdateAuthorDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateAuthorDto>>;
export declare class UpdateAuthorDto extends UpdateAuthorDto_base {
    firstName: string;
    lastName: string;
}
export {};
