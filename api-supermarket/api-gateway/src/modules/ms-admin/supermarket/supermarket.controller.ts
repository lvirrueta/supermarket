// Nest Imports
import { Controller, Param, Get } from '@nestjs/common';
// Dependencies
import { lastValueFrom, Observable } from 'rxjs';
import { ErrorService } from 'src/common/utils/errors/error.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ClientProxySupermarket } from 'src/common/utils/proxy/client-proxy';
// Classes
import { Supermarket } from 'src/common/models/ms-admin/class/supermarket.class';
// Constants
import { AdminSupermarketMSG } from 'src/common/utils/proxy/constants';

/**
 * Supermarket controller is the gateway to {@link [ms-admin-supermarket](../../../../../ms-admin/src/admin/supermarket/supermarket.controller.ts)}
 */
@ApiTags('Admin/Supermarket')
@Controller('api/v1/admin/supermarket')
export class SupermarketController {
  constructor(
    private readonly clientProxy: ClientProxySupermarket,
    private readonly errorService: ErrorService,
    ) { }
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
  async getAllSupermarkets(): Promise<Observable<Supermarket[]>> {
    const response = await lastValueFrom( this.clientProxyAdmin.send( AdminSupermarketMSG.GET_ALL, '' ) );
    return this.errorService.isError(response);
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
  async getSupermarketByID(@Param('id') id: string): Promise<Observable<Supermarket>> {
    const response = await lastValueFrom( this.clientProxyAdmin.send( AdminSupermarketMSG.GET_ONE, id ) );
    return this.errorService.isError(response);
  }

}
