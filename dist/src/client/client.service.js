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
exports.ClientService = void 0;
const prisma_service_1 = require("./../../prisma/prisma.service");
const common_1 = require("@nestjs/common");
let ClientService = class ClientService {
    constructor(prismaService) {
        this.prismaService = prismaService;
    }
    async create(createClientDto) {
        return await this.prismaService.client.create({
            data: createClientDto
        });
    }
    async findOneByEmail(email) {
        return await this.prismaService.client.findUnique({
            where: { email }
        });
    }
    async findAll() {
        return await this.prismaService.client.findMany();
    }
    async findOne(id) {
        return await this.prismaService.client.findUnique({
            where: { id }
        });
    }
    async update(id, updateClientDto) {
        return await this.prismaService.client.update({
            where: {
                id
            },
            data: updateClientDto
        });
    }
    async remove(id) {
        return await this.prismaService.client.delete({
            where: {
                id
            }
        });
    }
};
exports.ClientService = ClientService;
exports.ClientService = ClientService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClientService);
//# sourceMappingURL=client.service.js.map