import { PrismaClient } from '@prisma/client';
import { PrismaService } from './../../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Injectable()
export class ClientService {
  constructor(private readonly prismaService: PrismaService) { }
  async create(createClientDto: CreateClientDto) {
    return await this.prismaService.client.create({
      data:
        createClientDto
    })
  }
  async findOneByEmail(email: string) {
    return await this.prismaService.client.findUnique({
      where: { email }
    })
  }

  async findAll() {
    return await this.prismaService.client.findMany();
  }

  async findOne(id: string) {
    return await this.prismaService.client.findUnique({
      where:{id}
    });
  }

  async update(id: string, updateClientDto: UpdateClientDto) {
    return await this.prismaService.client.update({
      where: {
        id
      },
      data: 
        updateClientDto
    });
  }

  async remove(id: string) {
    return await this.prismaService.client.delete({
      where: {
        id
      }
    });
  }
}
