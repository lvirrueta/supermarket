import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthController } from './auth/auth.controller';

@Module({
  controllers: [AuthController]
})
export class AuthModule {}
