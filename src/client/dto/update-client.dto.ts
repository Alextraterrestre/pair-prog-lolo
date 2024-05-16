import { PartialType } from '@nestjs/mapped-types';
import { CreateClientDto } from './create-client.dto';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class UpdateClientDto extends PartialType(CreateClientDto) {

    @IsEmail()
    email:string
    adress:string
    phone:string
    firstname:string
    lastname: string
    corporation: string
}
