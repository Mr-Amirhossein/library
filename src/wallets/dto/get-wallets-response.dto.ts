import { ApiProperty } from '@nestjs/swagger';

export class GetWalletsResponseDto {
  @ApiProperty({
    type: String,
    description: 'شناسه کیف پول',
  })
  id: string;

  @ApiProperty({
    type: Number,
    description: 'موجودی کیف پول',
  })
  balance: number;

  @ApiProperty({
    type: Number,
    description: 'موجودی قابل برداشت کیف پول',
  })
  withdrawalBalance: number;

  @ApiProperty({
    type: String,
    description: 'تاریخ ایجاد کیف پول',
  })
  createdAt: string;

  @ApiProperty({
    type: String,
    description: 'تاریخ به روز رسانی کیف پول',
  })
  updatedAt: string;
}
