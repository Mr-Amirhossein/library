import { PrismaService } from 'nestjs-prisma';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
export declare class WalletService {
    private readonly db;
    constructor(db: PrismaService);
    findMany(authorId: string): import(".prisma/client").Prisma.PrismaPromise<unknown>;
    findOne(walletId: string): import(".prisma/client").Prisma.Prisma__WalletClient<{
        balance: number;
        withdrawalBalance: number;
        authorId: string;
        createdAt: Date;
        updatedAt: Date;
        id: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        balance: number;
        withdrawalBalance: number;
        authorId: string;
        createdAt: Date;
        updatedAt: Date;
        id: string;
    }[]>;
    createWallet(createWalletDto: CreateWalletDto): import(".prisma/client").Prisma.Prisma__WalletClient<{
        id: string;
        balance: number;
        withdrawalBalance: number;
        authorId: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    updateWallet(walletId: string, updateWalletDto: UpdateWalletDto): import(".prisma/client").Prisma.Prisma__WalletClient<{
        id: string;
        balance: number;
        withdrawalBalance: number;
        authorId: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs> | "کیف پول مورد نظر یافت نشد";
    delete(walletId: string): import(".prisma/client").Prisma.Prisma__WalletClient<{
        id: string;
        balance: number;
        withdrawalBalance: number;
        authorId: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs> | "کیف پول مورد نظر یافت نشد";
}
