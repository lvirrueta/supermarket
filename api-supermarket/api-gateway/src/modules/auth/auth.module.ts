import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { ProxyModule } from 'src/common/utils/proxy/proxy.module';
import { ErrorService } from 'src/common/utils/errors/error.service';

@Module({
  imports: [ProxyModule],
  controllers: [AuthController],
  providers: [ErrorService],
})
export class AuthModule {}
