import { ApiProperty } from '@nestjs/swagger';

export class UpdateWalletDto {
  @ApiProperty({
    description: 'موجودی کیف پول',
    type: Number,
  })
  balance: number;

  @ApiProperty({
    description: 'موجودی قابل برداشت',
    type: Number,
  })
  withdrawalBalance: number;
}
