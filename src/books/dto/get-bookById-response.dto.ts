import { ApiProperty } from '@nestjs/swagger';

export class GetBookByIdResponseDto {
  @ApiProperty({
    type: String,
    description: 'شناسه کتاب',
  })
  title: string;
  @ApiProperty({
    type: String,
    description: 'عنوان کتاب',
  })
  authorId: string;
}
