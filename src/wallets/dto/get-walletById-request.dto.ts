import { ApiProperty } from '@nestjs/swagger';
import { IsUUID } from 'class-validator';

export class GetWalletByIdRequestDto {
  @ApiProperty({
    type: String,
    description: 'شناسه کیف پول',
  })
  @IsUUID(4, {
    message: 'شناسه کیف پول باید به صورت UUID4 باشد',
  })
  walletId: string;
}
