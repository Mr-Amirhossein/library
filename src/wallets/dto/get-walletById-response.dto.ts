import { ApiProperty } from '@nestjs/swagger';

export class GetWalletByIdResponseDto {
  @ApiProperty({
    type: Number,
    description: 'موجودی کیف پول',
  })
  balance: number;
  @ApiProperty({
    type: Number,
    description: 'موجودی قابل برداشت',
  })
  withdrawalBalance: number;
  @ApiProperty({
    type: String,
    description: 'شناسه صاحب کیف پول',
  })
  authorId: string;
  @ApiProperty({
    type: Date,
    description: 'تاریخ ایجاد کیف پول',
  })
  createdAt: Date;
  @ApiProperty({
    type: Date,
    description: 'تاریخ به روز رسانی کیف پول',
  })
  updatedAt: Date;
}
