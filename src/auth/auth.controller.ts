import { AuthService } from './auth.service';
import { UserService } from './../user/user.service';
import { PrismaService } from 'prisma/prisma.service';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { SigninDto } from './dto/signin.dto';
import { hash } from 'crypto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) { }

  @Post('register')
  async register(@Body() payload: RegisterDto) {
    //if exist
    const user = await this.userService.findOneByEmail(payload.email)
    if (user) {
      return 'user exist'
    }
    //hashing password
    payload.password = await this.authService.hashing(payload.password);

    //Create user
    await this.userService.createUser(payload)

    return "L'utilisateur à été créer"
  }
  @Post('signin')
  async signin(@Body() payload: SigninDto) {
    //email exist?
    const user = await this.userService.findOneByEmail(payload.email)
    if (!user) {
      return "user doesn't exist"
    }
    //compare password
    const isMatch = await this.authService.comparePwd(payload.password, user.password)
    if (!isMatch) {
      return 'bad credentials'
    }
    //create token
    const token = await this.authService.createToken({ id: user.id, email: user.email }, process.env.SECRET_KEY, '2h')
    //sucess
    return { token, user: { email: user.email } }
  }
}

