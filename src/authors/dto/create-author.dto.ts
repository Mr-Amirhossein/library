import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthorDto {
  @ApiProperty({
    type: String,
    description: 'The first name of the author',
  })
  firstName: string;

  @ApiProperty({
    type: String,
    description: 'The last name of the author',
  })
  lastName: string;

  @ApiProperty({
    type: Array,
    description: 'The books of the author',
  })
  books: [];
}
