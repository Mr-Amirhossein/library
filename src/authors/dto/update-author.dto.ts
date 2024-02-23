import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthorDto } from './create-author.dto';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateAuthorDto extends PartialType(CreateAuthorDto) {
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
}
