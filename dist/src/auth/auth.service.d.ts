import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private jwtService;
    constructor(jwtService: JwtService);
    hashing(password: string): Promise<string>;
    comparePwd(password: string, hash: string): Promise<boolean>;
    createToken(payload: {
        id: string;
        email: string;
    }, secret: string, expiration: string | number): Promise<string>;
}
