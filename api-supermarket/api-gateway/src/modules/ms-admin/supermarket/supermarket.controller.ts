// Nest Imports
import { Controller, Param, Get } from '@nestjs/common';
// Dependencies
import { ClientProxySupermarket } from 'src/common/utils/proxy/client-proxy';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
// Classes
import { Supermarket } from 'src/common/models/ms-admin/class/supermarket.class';
// Constants
import { AdminSupermarketMSG } from 'src/common/utils/proxy/constants';

@ApiTags('Admin/Supermarket')
@Controller('api/v1/admin/supermarket')
export class SupermarketController {
  constructor(private readonly clientProxy: ClientProxySupermarket) { }
  private clientProxyAdmin = this.clientProxy.clientProxyAdmin();

  /** Get all supermarkets */
  @ApiOperation({
    summary: 'Get all supermarkets',
  })
  @ApiResponse({
    status: 200,
    description:
      'Get all supermarkets',
    isArray: true,
    type: Supermarket,
  })
  @Get('get')
  getAllSupermarkets() {
    return this.clientProxyAdmin.send(AdminSupermarketMSG.GET_ALL, '');
  }

  /** Get one supermarket by id */
  @ApiOperation({
    summary: 'Get one supermarket',
  })
  @ApiResponse({
    status: 200,
    description:
      'Get one supermarket',
    isArray: false,
    type: Supermarket,
  })
  @Get('get/:id')
  getSupermarketByID(@Param('id') id: string) {
    return this.clientProxyAdmin.send(AdminSupermarketMSG.GET_ONE, id);
  }

}
