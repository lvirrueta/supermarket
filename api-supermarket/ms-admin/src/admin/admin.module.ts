import { Module } from '@nestjs/common';
import { ManagerController } from './manager/manager.controller';
import { ManagerService } from './manager/manager.service';
import { SupermarketController } from './supermarket/supermarket.controller';
import { SupermarketService } from './supermarket/supermarket.service';

@Module({
  controllers: [ ManagerController, SupermarketController ],
  providers: [ ManagerService, SupermarketService ],
})
export class AdminModule {}
