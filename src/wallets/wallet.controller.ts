import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { WalletService } from './wallet.service';
import {
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { GetWalletsResponseDto } from './dto/get-wallets-response.dto';
import { GetWalletsRequestDto } from './dto/get-wallets-request.dto';
import { GetWalletByIdResponseDto } from './dto/get-walletById-response.dto';
import { GetWalletByIdRequestDto } from './dto/get-walletById-request.dto';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
@ApiTags('wallets')
@Controller('/wallet')
export class WalletController {
  constructor(private readonly walletService: WalletService) {}
  @ApiOperation({ summary: 'لیست تمامی کیف پول های یک نویسنده' })
  @ApiOkResponse({
    type: [GetWalletsResponseDto],
    description: 'لیست تمامی کیف پول های یک نویسنده',
  })
  @Get('/:authorId')
  findMany(@Param() payload: GetWalletsRequestDto) {
    return this.walletService.findMany(payload.authorId);
  }

  @Get()
  @ApiOperation({ summary: 'لیست تمامی کیف پول ها' })
  @ApiOkResponse({
    type: [GetWalletsResponseDto],
    description: 'لیست تمامی کیف پول ها',
  })
  findAll() {
    return this.walletService.findAll();
  }

  @Get('/:walletId')
  @ApiOperation({ summary: 'جزئیات یک کیف پول ' })
  @ApiOkResponse({
    type: GetWalletByIdResponseDto,
    description: 'جزئیات یک کیف پول',
  })
  @ApiResponse({
    status: 404,
    description: 'کیف پول مورد نظر یافت نشد',
  })
  @ApiResponse({
    status: 403,
    description: 'کیف پول مورد نظر متعلق به شما نیست',
  })
  findOne(@Param() payload: GetWalletByIdRequestDto) {
    return this.walletService.findOne(payload.walletId);
  }

  @Post()
  @ApiOperation({ summary: 'ایجاد کیف پول جدید' })
  @ApiOkResponse({
    type: CreateWalletDto,
    description: 'جزئیات کیف پول ایجاد شده',
  })
  @ApiResponse({
    status: 403,
    description: 'شما قبلا کیف پول ایجاد کرده اید',
  })
  createWallet(@Body() payload: CreateWalletDto) {
    return this.walletService.createWallet(payload);
  }

  @Put('/:walletId')
  @ApiOperation({ summary: ' بروزرسانی کیف پول با شناسه' })
  @ApiOkResponse({
    type: CreateWalletDto,
    description: 'جزئیات کیف پول بروزرسانی شده',
  })
  @ApiResponse({
    status: 404,
    description: 'کیف پول مورد نظر یافت نشد',
  })
  @ApiResponse({
    status: 403,
    description: 'کیف پول مورد نظر متعلق به شما نیست',
  })
  updateWallet(
    @Param() payload: GetWalletByIdRequestDto,
    @Body() updateWalletDto: UpdateWalletDto,
  ) {
    return this.walletService.updateWallet(payload.walletId, updateWalletDto);
  }

  @Delete('/:walletId')
  @ApiOperation({ summary: 'حذف کیف پول با شناسه' })
  @ApiOkResponse({
    description: 'جزئیات کیف پول حذف شده',
  })
  @ApiResponse({
    status: 404,
    description: 'کیف پول مورد نظر یافت نشد',
  })
  @ApiResponse({
    status: 403,
    description: 'کیف پول مورد نظر متعلق به شما نیست',
  })
  delete(@Param() payload: GetWalletByIdRequestDto) {
    return this.walletService.delete(payload.walletId);
  }
}
