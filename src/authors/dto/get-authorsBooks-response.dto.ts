import { ApiProperty } from '@nestjs/swagger';
import { CreateBookDto } from 'src/books/dto/create-book.dto';

export class GetAuthorsBocoksResponseDto {
  @ApiProperty({
    type: [CreateBookDto],
    description: 'لیست کتاب های نویسنده',
  })
  books: CreateBookDto[];
}
