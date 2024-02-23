import { ApiProperty } from '@nestjs/swagger';
import { Author, Books } from '@prisma/client';

export class BookEntity implements Books {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  authorId: string;

  @ApiProperty()
  author: Author;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
