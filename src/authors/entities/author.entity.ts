import { ApiProperty } from '@nestjs/swagger';
import { Author } from '@prisma/client';

export class AuthorEntity implements Author {
  @ApiProperty()
  id: string;

  @ApiProperty()
  firstName: string;

  @ApiProperty()
  lastName: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  books: [];
}
