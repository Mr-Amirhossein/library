import { PartialType } from '@nestjs/mapped-types';
import { CreateBookDto } from './create-book.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBookDto extends PartialType(CreateBookDto) {
  @ApiProperty({
    type: String,
    description: 'The id of the book',
  })
  id: string;

  @ApiProperty({
    type: String,
    description: 'The title of the book',
  })
  title: string;

  @ApiProperty({
    type: String,
    description: 'The author of the book',
  })
  authorId: string;
}
