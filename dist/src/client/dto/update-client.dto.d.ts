import { CreateClientDto } from './create-client.dto';
declare const UpdateClientDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateClientDto>>;
export declare class UpdateClientDto extends UpdateClientDto_base {
    email: string;
    adress: string;
    phone: string;
    firstname: string;
    lastname: string;
    corporation: string;
}
export {};
