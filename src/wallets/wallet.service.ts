import { Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';

@Injectable()
export class WalletService {
  constructor(private readonly db: PrismaService) {}

  findMany(authorId: string) {
    return this.db
      .$queryRaw`SELECT id,balance,createdAt,withdrawalBalance,updatedAt FROM "Wallet" WHERE "authorId" = ${authorId}`;
    // return this.db.wallet.findMany({
    //   where: {
    //     authorId,
    //   },
    //   select: {
    //     id: true,
    //     balance: true,
    //     createdAt: true,
    //     withdrawalBalance: true,
    //     updatedAt: true,
    //   },
    // });
  }

  findOne(walletId: string) {
    return this.db.wallet.findFirst({
      where: {
        id: walletId,
      },
      select: {
        id: true,
        balance: true,
        authorId: true,
        createdAt: true,
        withdrawalBalance: true,
        updatedAt: true,
      },
    });
  }
  findAll() {
    return this.db.wallet.findMany({
      select: {
        id: true,
        balance: true,
        authorId: true,
        createdAt: true,
        withdrawalBalance: true,
        updatedAt: true,
      },
    });
  }
  createWallet(createWalletDto: CreateWalletDto) {
    return this.db.wallet.create({
      data: createWalletDto,
    });
  }

  updateWallet(walletId: string, updateWalletDto: UpdateWalletDto) {
    const wallet = this.db.wallet.findFirst({
      where: {
        id: walletId,
      },
    });
    if (!wallet) {
      return 'کیف پول مورد نظر یافت نشد';
    }
    return this.db.wallet.update({
      where: {
        id: walletId,
      },
      data: updateWalletDto,
    });
  }

  delete(walletId: string) {
    const wallet = this.db.wallet.findFirst({
      where: {
        id: walletId,
      },
    });
    if (!wallet) {
      return 'کیف پول مورد نظر یافت نشد';
    }
    return this.db.wallet.delete({
      where: {
        id: walletId,
      },
    });
  }
}
