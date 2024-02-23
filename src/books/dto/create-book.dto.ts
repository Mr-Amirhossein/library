import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({
    type: String,
    description: 'عنوان کتاب',
  })
  title: string;

  @ApiProperty({
    type: String,
    description: 'نویسنده کتاب',
  })
  authorId: string;
}
