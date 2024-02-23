import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class GetAuthorByIdRequestDto {
  @ApiProperty({
    type: String,
    description: 'شناسه نویسنده',
  })
  @IsUUID(4, {
    message: 'شناسه نویسنده باید به صورت UUID4 باشد',
  })
  authorId: string;
}
