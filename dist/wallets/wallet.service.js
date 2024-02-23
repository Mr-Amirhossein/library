"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_prisma_1 = require("nestjs-prisma");
let WalletService = class WalletService {
    constructor(db) {
        this.db = db;
    }
    findMany(authorId) {
        return this.db
            .$queryRaw `SELECT id,balance,createdAt,withdrawalBalance,updatedAt FROM "Wallet" WHERE "authorId" = ${authorId}`;
    }
    findOne(walletId) {
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
    createWallet(createWalletDto) {
        return this.db.wallet.create({
            data: createWalletDto,
        });
    }
    updateWallet(walletId, updateWalletDto) {
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
    delete(walletId) {
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
};
exports.WalletService = WalletService;
exports.WalletService = WalletService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [nestjs_prisma_1.PrismaService])
], WalletService);
//# sourceMappingURL=wallet.service.js.map