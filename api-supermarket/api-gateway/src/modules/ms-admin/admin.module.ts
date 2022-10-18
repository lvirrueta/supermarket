import { Module } from '@nestjs/common';
import { ErrorService } from 'src/common/utils/errors/error.service';
import { ProxyModule } from 'src/common/utils/proxy/proxy.module';
import { ManagerController } from './manager/manager.controller';
import { SupermarketController } from './supermarket/supermarket.controller';

@Module({
  imports: [ProxyModule],
  controllers: [ ManagerController, SupermarketController],
  providers: [ErrorService],
})
export class AdminModule {}
