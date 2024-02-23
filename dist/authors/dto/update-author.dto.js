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
exports.UpdateAuthorDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_author_dto_1 = require("./create-author.dto");
const swagger_1 = require("@nestjs/swagger");
class UpdateAuthorDto extends (0, mapped_types_1.PartialType)(create_author_dto_1.CreateAuthorDto) {
}
exports.UpdateAuthorDto = UpdateAuthorDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'The first name of the author',
    }),
    __metadata("design:type", String)
], UpdateAuthorDto.prototype, "firstName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: String,
        description: 'The last name of the author',
    }),
    __metadata("design:type", String)
], UpdateAuthorDto.prototype, "lastName", void 0);
//# sourceMappingURL=update-author.dto.js.map