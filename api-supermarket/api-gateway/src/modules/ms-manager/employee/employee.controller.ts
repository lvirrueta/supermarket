// Nest Imports
import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body
} from '@nestjs/common';
// Dependencies
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ErrorService } from 'src/common/utils/errors/error.service';
import { ClientProxySupermarket } from 'src/common/utils/proxy/client-proxy';
// DTO
import { EmployeeDTO } from '../../../common/models/ms-manager/dto/employee.dto';
// Classes
import { Employee } from 'src/common/models/ms-manager/class/employee.class';
// Constants
import { ManagerEmployeeMSG } from 'src/common/utils/proxy/constants';
import { lastValueFrom } from 'rxjs';

@ApiTags('Manager/Employees')
@Controller('api/v1/manager/employee')
export class EmployeeController {
  constructor(
    private readonly clientProxy: ClientProxySupermarket,
    private readonly errorService: ErrorService,
    ) { }
  private clientProxyManager = this.clientProxy.clientProxyManager();

  /** Get all employees */
  @ApiOperation({
    summary: 'Get all employees',
  })
  @ApiResponse({
    status: 200,
    description:
      'Get all employees',
    isArray: true,
    type: Employee,
  })
  @Get('get')
  async getEmployees() {
    const response = await lastValueFrom( this.clientProxyManager.send(ManagerEmployeeMSG.GET_ALL, '') );
    return this.errorService.isError(response);
  }

  /** Get one employee by id */
  @ApiOperation({
    summary: 'Get one employee by id',
  })
  @ApiResponse({
    status: 200,
    description:
      'Get one employee by id',
    isArray: false,
    type: Employee,
  })
  @Get('get/:id')
  async getEmployee(@Param('id') id: string) {
    const response = await lastValueFrom( this.clientProxyManager.send(ManagerEmployeeMSG.GET_ONE, id) );
    return this.errorService.isError(response);
    return ;
  }

  /** Create one employee */
  @ApiOperation({
    summary: 'Create one employee',
  })
  @ApiResponse({
    status: 200,
    description:
      'Create one employee',
    isArray: false,
    type: Boolean,
  })
  @Post('create')
  async createEmployee(@Body() employee: EmployeeDTO) {
    const response = await lastValueFrom( this.clientProxyManager.send(ManagerEmployeeMSG.CREATE, employee) );
    return this.errorService.isError(response);
  }

  /** Update one employee */
  @ApiOperation({
    summary: 'Update one employee',
  })
  @ApiResponse({
    status: 200,
    description:
      'Update one employee',
    isArray: false,
    type: Boolean,
  })
  @Put('update/:id')
  async updateEmployee(@Body() employee: EmployeeDTO, @Param('id') id: string) {
    const response = await lastValueFrom( this.clientProxyManager.send(ManagerEmployeeMSG.UPDATE, { employee, id }));
    return this.errorService.isError(response);
  }

  /** Delete a employee */
  @ApiOperation({
    summary: 'Delete a employee',
  })
  @ApiResponse({
    status: 200,
    description:
      'Delete a employee',
    isArray: false,
    type: Boolean,
  })
  @Delete('delete/:id')
  async deleteEmployee(@Param('id') id: string) {
    const response = await lastValueFrom( this.clientProxyManager.send(ManagerEmployeeMSG.DELETE, id) );
    return this.errorService.isError(response);
  }
}
