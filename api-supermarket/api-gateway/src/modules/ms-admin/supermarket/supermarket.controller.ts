import { Controller,Param,Get } from '@nestjs/common';
import { ClientProxySupermarket } from 'src/common/proxy/client-proxy';
import { AdminSupermarketMSG } from 'src/common/proxy/constants';

@Controller('api/v1/admin/supermarket')
export class SupermarketController {
  constructor(private readonly clientProxy: ClientProxySupermarket) { }
  private clientProxyAdmin = this.clientProxy.clientProxyAdmin();

  @Get('get')
  getAllSupermarkets() {
    return this.clientProxyAdmin.send(AdminSupermarketMSG.GET_ALL, '');
  }

  @Get('get/:id')
  getSupermarketByID(@Param('id') id: string) {
    return this.clientProxyAdmin.send(AdminSupermarketMSG.GET_ONE, id);
  }

}
