import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    finAll(): Promise<{
        email: string;
        firstname: string;
        lastname: string;
    }[]>;
}
