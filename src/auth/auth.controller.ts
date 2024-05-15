import { AuthService } from './auth.service';
import { UserService } from './../user/user.service';
import { PrismaService } from 'prisma/prisma.service';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { registerDto } from './dto/register.dto';


@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService:UserService,
    private readonly authService:AuthService,
  ) { }

  @Post('register')
  async register(@Body()payload:registerDto) {
const user = await this.userService.findOneByEmail(payload.email)
    if (user) {
      return 'user exist'
    }

  payload.password = await this.authService.hashing(payload.password);

  const newUser =  
  }
}
