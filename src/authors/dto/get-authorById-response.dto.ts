import { ApiProperty } from '@nestjs/swagger';

export class GetAuthorByIdResponsetDto {
  @ApiProperty({
    type: String,
    description: 'شناسه نویسنده',
  })
  id: string;

  @ApiProperty({
    type: String,
    description: 'نام نویسنده',
  })
  firstName: string;

  @ApiProperty({
    type: String,
    description: 'نام خانوادگی نویسنده',
  })
  lastName: string;
}
