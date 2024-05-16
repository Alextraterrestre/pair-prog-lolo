import { CreateUserDto } from './dto/create.user.dto';
import { PrismaService } from 'prisma/prisma.service';
export declare class UserService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findOneByEmail(email: string): Promise<{
        id: string;
        email: string;
        password: string;
        firstname: string;
        lastname: string;
        role: import(".prisma/client").$Enums.RoleEnum;
        createdAt: Date;
        updatedAt: Date;
    }>;
    finAll(): Promise<{
        email: string;
        firstname: string;
        lastname: string;
    }[]>;
    createUser(createUserDto: CreateUserDto): Promise<{
        id: string;
        email: string;
        password: string;
        firstname: string;
        lastname: string;
        role: import(".prisma/client").$Enums.RoleEnum;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
