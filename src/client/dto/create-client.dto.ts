import { IsEmail, IsNotEmpty } from "class-validator"


export class CreateClientDto {
    @IsEmail()
    @IsNotEmpty()
    email:string

    @IsNotEmpty()
    adress:string

    @IsNotEmpty()
    phone:string
    
    @IsNotEmpty()
    firstname:string

    @IsNotEmpty()
    lastname: string
    
    @IsNotEmpty()
    corporation: string
}
