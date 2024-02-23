import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class DeleteAuthorRequestDto {
  @ApiProperty({
    type: String,
    description: 'شناسه نویسنده',
  })
  @IsUUID(4, { message: 'شناسه نویسنده معتبر نیست' })
  authorId: string;
}
