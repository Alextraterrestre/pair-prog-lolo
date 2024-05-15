import { IsEmail, IsNotEmpty } from "class-validator"

export class registerDto {
    @IsEmail()
    @IsNotEmpty()
    email:string

    @IsNotEmpty()
    password:string
}