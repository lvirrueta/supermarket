// Nest Imports
import {
  Get,
  Put,
  Body,
  Post,
  Param,
  Delete,
  Controller,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
// Dependencies
import { Observable, firstValueFrom, lastValueFrom } from 'rxjs';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ClientProxySupermarket } from 'src/common/utils/proxy/client-proxy';
// DTO
import { ManagerDTO } from '../../../common/models/ms-admin/dto/manager.dto';
// Classes
import { Manager } from 'src/common/models/ms-admin/class/manager.class';
// Constants
import { AdminManagerMSG } from 'src/common/utils/proxy/constants';
import { ErrorService } from 'src/common/utils/errors/error.service';

/**
 * Manager controller is the gateway to {@link [ms-admin-manager](../../../../../ms-admin/src/admin/manager/manager.controller.ts)}
 */
@ApiTags('Admin/Manager')
@Controller('api/v1/admin/manager')
export class ManagerController {
  constructor(
    private readonly clientProxy: ClientProxySupermarket,
    private readonly errorService: ErrorService,
  ) {}
  private clientProxyAdmin = this.clientProxy.clientProxyAdmin();

  /** Get all managers */
  @ApiOperation({
    summary: 'Get all managers',
  })
  @ApiResponse({
    status: 200,
    description:
      'Get all managers',
    isArray: true,
    type: Manager,
  })
  @Get('/get')
  getAllManagers(): Observable<Manager[]> {
    return this.clientProxyAdmin.send(AdminManagerMSG.GET_ALL, '');
  }

  /** Get one manager by id */
  @ApiOperation({
    summary: 'Get one manager by id',
  })
  @ApiResponse({
    status: 200,
    description:
      'Get one manager by id',
    isArray: false,
    type: Manager,
  })
  @Get('get/:id')
  getManagerByID(@Param('id') id: string): Observable<Manager> {
    return this.clientProxyAdmin.send(AdminManagerMSG.GET_ONE, id);
  }

  /** Create a manager 
   * 
   * @param {ManagerDTO} manager
   * @return {boolean} Return true if manager was created otherwise returns false
  */
  @ApiOperation({
    summary: 'Create a manager',
  })
  @ApiResponse({
    status: 200,
    description:
      'Return true if manager was created otherwise returns an error',
    isArray: false,
    type: Boolean,
  })
  @Post('/create')
  async createManager(@Body() manager: ManagerDTO) {
    const response = await lastValueFrom( this.clientProxyAdmin.send(AdminManagerMSG.CREATE, manager) );
    return this.errorService.isError(response);
  }

  /** Update a manager */
  @ApiOperation({
    summary: 'Update a manager',
  })
  @ApiResponse({
    status: 200,
    description:
      'Update a manager',
    isArray: false,
    type: Boolean,
  })
  @Put('/update/:id')
  updateManager(@Param('id') id: string, @Body() ManagerDTO: ManagerDTO) {
    return this.clientProxyAdmin.send(AdminManagerMSG.UPDATE, { ManagerDTO, id });
  }

  /** Delete a manager */
  @ApiOperation({
    summary: 'Delete a manager',
  })
  @ApiResponse({
    status: 200,
    description:
      'Delete a manager',
    isArray: false,
    type: Boolean,
  })
  @Delete('/delete/:id')
  deleteManager(@Param('id') id: string) {
    return this.clientProxyAdmin.send(AdminManagerMSG.DELETE, id);
  }

}
