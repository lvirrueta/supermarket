// Nest
import { Controller, Post, Body, Param } from '@nestjs/common';
// Dependencies
import { lastValueFrom } from 'rxjs';
import { ErrorService } from 'src/common/utils/errors/error.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ClientProxySupermarket } from 'src/common/utils/proxy/client-proxy';
// DTO
import { SupermarketDTO } from '../../../common/models/ms-manager/dto/supermarket.dto';
// Constants
import { ManagerSupermarketMSG } from 'src/common/utils/proxy/constants';


/**
 * Supermarket controller is the gateway to {@link [ms-manager-supermarket](../../../../../ms-manager/src/manager/supermarket/supermarket.controller.ts)}
 */
@ApiTags('Manager/Supermarket')
@Controller('api/v1/manager/supermarket')
export class SupermarketController {
  constructor(
    private readonly clientProxy: ClientProxySupermarket,
    private readonly errorService: ErrorService,
    ) { }
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
  @Post('create/supermarket/:idManager')
  async createSupermarket(@Param('idManager') idManager: string, @Body() supermarket: SupermarketDTO) {
    const response = await lastValueFrom( this.clientProxyManager.send( ManagerSupermarketMSG.CREATE, {supermarket, idManager} ));
    return this.errorService.isError(response);
  }
  
}
