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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletController = void 0;
const common_1 = require("@nestjs/common");
const wallet_service_1 = require("./wallet.service");
const swagger_1 = require("@nestjs/swagger");
const get_wallets_response_dto_1 = require("./dto/get-wallets-response.dto");
const get_wallets_request_dto_1 = require("./dto/get-wallets-request.dto");
const get_walletById_response_dto_1 = require("./dto/get-walletById-response.dto");
const get_walletById_request_dto_1 = require("./dto/get-walletById-request.dto");
const create_wallet_dto_1 = require("./dto/create-wallet.dto");
const update_wallet_dto_1 = require("./dto/update-wallet.dto");
let WalletController = class WalletController {
    constructor(walletService) {
        this.walletService = walletService;
    }
    findMany(payload) {
        return this.walletService.findMany(payload.authorId);
    }
    findAll() {
        return this.walletService.findAll();
    }
    findOne(payload) {
        return this.walletService.findOne(payload.walletId);
    }
    createWallet(payload) {
        return this.walletService.createWallet(payload);
    }
    updateWallet(payload, updateWalletDto) {
        return this.walletService.updateWallet(payload.walletId, updateWalletDto);
    }
    delete(payload) {
        return this.walletService.delete(payload.walletId);
    }
};
exports.WalletController = WalletController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'لیست تمامی کیف پول های یک نویسنده' }),
    (0, swagger_1.ApiOkResponse)({
        type: [get_wallets_response_dto_1.GetWalletsResponseDto],
        description: 'لیست تمامی کیف پول های یک نویسنده',
    }),
    (0, common_1.Get)('/:authorId'),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_wallets_request_dto_1.GetWalletsRequestDto]),
    __metadata("design:returntype", void 0)
], WalletController.prototype, "findMany", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'لیست تمامی کیف پول ها' }),
    (0, swagger_1.ApiOkResponse)({
        type: [get_wallets_response_dto_1.GetWalletsResponseDto],
        description: 'لیست تمامی کیف پول ها',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], WalletController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/:walletId'),
    (0, swagger_1.ApiOperation)({ summary: 'جزئیات یک کیف پول ' }),
    (0, swagger_1.ApiOkResponse)({
        type: get_walletById_response_dto_1.GetWalletByIdResponseDto,
        description: 'جزئیات یک کیف پول',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'کیف پول مورد نظر یافت نشد',
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'کیف پول مورد نظر متعلق به شما نیست',
    }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_walletById_request_dto_1.GetWalletByIdRequestDto]),
    __metadata("design:returntype", void 0)
], WalletController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'ایجاد کیف پول جدید' }),
    (0, swagger_1.ApiOkResponse)({
        type: create_wallet_dto_1.CreateWalletDto,
        description: 'جزئیات کیف پول ایجاد شده',
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'شما قبلا کیف پول ایجاد کرده اید',
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_wallet_dto_1.CreateWalletDto]),
    __metadata("design:returntype", void 0)
], WalletController.prototype, "createWallet", null);
__decorate([
    (0, common_1.Put)('/:walletId'),
    (0, swagger_1.ApiOperation)({ summary: ' بروزرسانی کیف پول با شناسه' }),
    (0, swagger_1.ApiOkResponse)({
        type: create_wallet_dto_1.CreateWalletDto,
        description: 'جزئیات کیف پول بروزرسانی شده',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'کیف پول مورد نظر یافت نشد',
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'کیف پول مورد نظر متعلق به شما نیست',
    }),
    __param(0, (0, common_1.Param)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_walletById_request_dto_1.GetWalletByIdRequestDto,
        update_wallet_dto_1.UpdateWalletDto]),
    __metadata("design:returntype", void 0)
], WalletController.prototype, "updateWallet", null);
__decorate([
    (0, common_1.Delete)('/:walletId'),
    (0, swagger_1.ApiOperation)({ summary: 'حذف کیف پول با شناسه' }),
    (0, swagger_1.ApiOkResponse)({
        description: 'جزئیات کیف پول حذف شده',
    }),
    (0, swagger_1.ApiResponse)({
        status: 404,
        description: 'کیف پول مورد نظر یافت نشد',
    }),
    (0, swagger_1.ApiResponse)({
        status: 403,
        description: 'کیف پول مورد نظر متعلق به شما نیست',
    }),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_walletById_request_dto_1.GetWalletByIdRequestDto]),
    __metadata("design:returntype", void 0)
], WalletController.prototype, "delete", null);
exports.WalletController = WalletController = __decorate([
    (0, swagger_1.ApiTags)('wallets'),
    (0, common_1.Controller)('/wallet'),
    __metadata("design:paramtypes", [wallet_service_1.WalletService])
], WalletController);
//# sourceMappingURL=wallet.controller.js.map