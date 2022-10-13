import { Controller, Post, Body } from '@nestjs/common';
import { SupermarketDTO } from './dto/supermarket.dto';
import { ClientProxySupermarket } from 'src/common/proxy/client-proxy';
import { ManagerSupermarketMSG } from 'src/common/proxy/constants';

@Controller('api/v1/manager/supermarket')
export class SupermarketController {
  constructor(private readonly clientProxy: ClientProxySupermarket) { }
  private clientProxyManager = this.clientProxy.clientProxyManager();

  @Post('create/supermarket')
  createSupermarket(@Body() supermarket: SupermarketDTO) {
    return this.clientProxyManager.send(ManagerSupermarketMSG.CREATE, supermarket);
  }
}