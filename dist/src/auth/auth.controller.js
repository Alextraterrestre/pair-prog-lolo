"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const auth_service_1 = require("./auth.service");
const user_service_1 = require("./../user/user.service");
const common_1 = require("@nestjs/common");
const register_dto_1 = require("./dto/register.dto");
const signin_dto_1 = require("./dto/signin.dto");
let AuthController = class AuthController {
    constructor(userService, authService) {
        this.userService = userService;
        this.authService = authService;
    }
    async register(payload) {
        const user = await this.userService.findOneByEmail(payload.email);
        if (user) {
            return 'user exist';
        }
        payload.password = await this.authService.hashing(payload.password);
        await this.userService.createUser(payload);
        return "L'utilisateur à été créer";
    }
    async signin(payload) {
        const user = await this.userService.findOneByEmail(payload.email);
        if (!user) {
            return "user doesn't exist";
        }
        const isMatch = await this.authService.comparePwd(payload.password, user.password);
        if (!isMatch) {
            return 'bad credentials';
        }
        const token = await this.authService.createToken({ id: user.id, email: user.email }, process.env.SECRET_KEY, '2h');
        return { token, user: { email: user.email } };
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_dto_1.RegisterDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('signin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signin_dto_1.SigninDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signin", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [user_service_1.UserService,
        auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map