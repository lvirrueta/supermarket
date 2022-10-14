import { Module } from '@nestjs/common';
import { ProxyModule } from 'src/common/utils/proxy/proxy.module';
import { ManagerController } from './manager/manager.controller';
import { SupermarketController } from './supermarket/supermarket.controller';

@Module({
  imports: [ProxyModule],
  controllers: [ ManagerController, SupermarketController],
})
export class AdminModule {}
