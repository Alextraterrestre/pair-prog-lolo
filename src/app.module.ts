import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from 'prisma/prisma.module';
import { ClientModule } from './client/client.module';

@Module({
  imports: [PrismaModule, UserModule, AuthModule, ClientModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
