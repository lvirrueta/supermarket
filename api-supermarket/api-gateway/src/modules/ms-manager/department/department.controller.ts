// Nest Imports
import {
  Get,
  Put,
  Body,
  Post,
  Param,
  Delete,
  Controller,
} from '@nestjs/common';
// Dependencies
import { lastValueFrom } from 'rxjs';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ErrorService } from 'src/common/utils/errors/error.service';
import { ClientProxySupermarket } from 'src/common/utils/proxy/client-proxy';
// DTO
import { DepartmentDTO } from '../../../common/models/ms-manager/dto/department.dto';
// Classes
import { Department } from 'src/common/models/ms-manager/class/department.class';
// Constants
import { ManagerDepartmentMSG } from 'src/common/utils/proxy/constants';

@ApiTags('Manager/Departments')
@Controller('api/v1/manager/department')
export class DepartmentController {
  constructor(
    private readonly clientProxy: ClientProxySupermarket,
    private readonly errorService: ErrorService,
    ) { }
  private clientProxyManager = this.clientProxy.clientProxyManager();

  /** Get all departments */
  @ApiOperation({
    summary: 'Get all departments',
  })
  @ApiResponse({
    status: 200,
    description:
      'Get all departments',
    isArray: true,
    type: Department,
  })
  @Get('get')
  async getDepartments() {
    const response = await lastValueFrom( this.clientProxyManager.send( ManagerDepartmentMSG.GET_ALL, '' ) );
    return this.errorService.isError(response);
  }

  /** Create a department */
  @ApiOperation({
    summary: 'Create a department ',
  })
  @ApiResponse({
    status: 200,
    description:
      'Create a department ',
    isArray: false,
    type: Boolean,
  })
  @Post('create')
  async createDepartment(@Body() department: DepartmentDTO) {
    const response = await lastValueFrom( this.clientProxyManager.send( ManagerDepartmentMSG.CREATE, department ) );
    return this.errorService.isError(response);
  }

  /** Update a department */
  @ApiOperation({
    summary: 'Update a department ',
  })
  @ApiResponse({
    status: 200,
    description:
      'Update a department ',
    isArray: false,
    type: Boolean,
  })
  @Put('update/:id')
  async updateDepartment(@Body() department: DepartmentDTO, @Param('id') id: string) {
    const response = await lastValueFrom( this.clientProxyManager.send( ManagerDepartmentMSG.UPDATE, { department, id } ) );
    return this.errorService.isError(response);
  }

  /** Delete a department */
  @ApiOperation({
    summary: 'Delete a department ',
  })
  @ApiResponse({
    status: 200,
    description:
      'Delete a department ',
    isArray: false,
    type: Boolean,
  })
  @Delete('delete/:id')
  async deleteDepartments(@Param('id') id: string) {
    const response = await lastValueFrom( this.clientProxyManager.send( ManagerDepartmentMSG.DELETE, id ) );
    return this.errorService.isError(response);
  }

}
