import { WalletService } from './wallet.service';
import { GetWalletsRequestDto } from './dto/get-wallets-request.dto';
import { GetWalletByIdRequestDto } from './dto/get-walletById-request.dto';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
export declare class WalletController {
    private readonly walletService;
    constructor(walletService: WalletService);
    findMany(payload: GetWalletsRequestDto): import(".prisma/client").Prisma.PrismaPromise<unknown>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<{
        balance: number;
        withdrawalBalance: number;
        authorId: string;
        createdAt: Date;
        updatedAt: Date;
        id: string;
    }[]>;
    findOne(payload: GetWalletByIdRequestDto): import(".prisma/client").Prisma.Prisma__WalletClient<{
        balance: number;
        withdrawalBalance: number;
        authorId: string;
        createdAt: Date;
        updatedAt: Date;
        id: string;
    }, null, import("@prisma/client/runtime/library").DefaultArgs>;
    createWallet(payload: CreateWalletDto): import(".prisma/client").Prisma.Prisma__WalletClient<{
        id: string;
        balance: number;
        withdrawalBalance: number;
        authorId: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    updateWallet(payload: GetWalletByIdRequestDto, updateWalletDto: UpdateWalletDto): import(".prisma/client").Prisma.Prisma__WalletClient<{
        id: string;
        balance: number;
        withdrawalBalance: number;
        authorId: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs> | "کیف پول مورد نظر یافت نشد";
    delete(payload: GetWalletByIdRequestDto): import(".prisma/client").Prisma.Prisma__WalletClient<{
        id: string;
        balance: number;
        withdrawalBalance: number;
        authorId: string;
        createdAt: Date;
        updatedAt: Date;
    }, never, import("@prisma/client/runtime/library").DefaultArgs> | "کیف پول مورد نظر یافت نشد";
}
