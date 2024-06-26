import { CreateUserDto } from './dto/create.user.dto';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UserService {
    constructor(private readonly prismaService: PrismaService) {}
    async findOneByEmail(email: string) {
        return await this.prismaService.user.findUnique({ where: { email } })
    }
    async finAll() {
        return await this.prismaService.user.findMany({select:{firstname: true, lastname: true, email: true}})
    }

    async createUser(createUserDto: CreateUserDto) {
        return await this.prismaService.user.create(
            {
                data: createUserDto
            }
        )
    }
}