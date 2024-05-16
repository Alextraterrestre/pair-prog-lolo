import { PrismaService } from './../../prisma/prisma.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
export declare class ClientService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    create(createClientDto: CreateClientDto): Promise<{
        id: string;
        email: string;
        adress: string;
        phone: string;
        firstname: string;
        lastname: string;
        corporation: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findOneByEmail(email: string): Promise<{
        id: string;
        email: string;
        adress: string;
        phone: string;
        firstname: string;
        lastname: string;
        corporation: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<{
        id: string;
        email: string;
        adress: string;
        phone: string;
        firstname: string;
        lastname: string;
        corporation: string;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        email: string;
        adress: string;
        phone: string;
        firstname: string;
        lastname: string;
        corporation: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    update(id: string, updateClientDto: UpdateClientDto): Promise<{
        id: string;
        email: string;
        adress: string;
        phone: string;
        firstname: string;
        lastname: string;
        corporation: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
    remove(id: string): Promise<{
        id: string;
        email: string;
        adress: string;
        phone: string;
        firstname: string;
        lastname: string;
        corporation: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
