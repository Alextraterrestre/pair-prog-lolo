import { AuthService } from './auth.service';
import { UserService } from './../user/user.service';
import { RegisterDto } from './dto/register.dto';
import { SigninDto } from './dto/signin.dto';
export declare class AuthController {
    private readonly userService;
    private readonly authService;
    constructor(userService: UserService, authService: AuthService);
    register(payload: RegisterDto): Promise<"user exist" | "L'utilisateur à été créer">;
    signin(payload: SigninDto): Promise<"user doesn't exist" | "bad credentials" | {
        token: string;
        user: {
            email: string;
        };
    }>;
}
