import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class GetBookByIdRequestDto {
  @ApiProperty({
    type: String,
    description: 'شناسه کتاب',
  })
  @IsUUID(4, { message: 'شناسه کتاب باید UUID باشد' })
  bookId: string;
}
