import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor (private jwtService:JwtService) {}
    async hashing (password:string) {
        return await bcrypt.hash(password, 10)
    }

    async comparePwd(password:string, hash:string) {
        return await bcrypt.compare(password, hash)
    }

    async createToken(payload:
        {id:string ; email:string},
        secret:string,
        expiration:string | number) {
        return await this.jwtService.signAsync(payload, {secret, expiresIn: expiration})
    }
}
