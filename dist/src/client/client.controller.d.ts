import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
export declare class ClientController {
    private readonly clientService;
    constructor(clientService: ClientService);
    create(createClientDto: CreateClientDto): Promise<"Already exist" | "Le client à été trouver">;
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
    remove(id: string): Promise<string>;
}
