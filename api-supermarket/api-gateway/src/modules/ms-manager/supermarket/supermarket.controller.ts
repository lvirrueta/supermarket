// Nest
import { Controller, Post, Body } from '@nestjs/common';
// Dependencies
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ClientProxySupermarket } from 'src/common/utils/proxy/client-proxy';
// DTO
import { SupermarketDTO } from '../../../common/models/ms-manager/dto/supermarket.dto';
// Constants
import { ManagerSupermarketMSG } from 'src/common/utils/proxy/constants';

@ApiTags('Manager/Supermarket')
@Controller('api/v1/manager/supermarket')
export class SupermarketController {
  constructor(private readonly clientProxy: ClientProxySupermarket) { }
  private clientProxyManager = this.clientProxy.clientProxyManager();

  /** Create a supermarket */
  @ApiOperation({
    summary: 'Create a supermarket',
  })
  @ApiResponse({
    status: 200,
    description:
      'Create a supermarket',
    isArray: false,
    type: Boolean,
  })
  @Post('create/supermarket')
  createSupermarket(@Body() supermarket: SupermarketDTO) {
    return this.clientProxyManager.send(ManagerSupermarketMSG.CREATE, supermarket);
  }
  
}
