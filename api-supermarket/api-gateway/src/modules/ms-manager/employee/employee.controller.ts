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
import { ClientProxySupermarket } from 'src/common/utils/proxy/client-proxy';
// DTO
import { EmployeeDTO } from '../../../common/models/ms-manager/dto/employee.dto';
// Classes
// Constants
import { ManagerEmployeeMSG } from 'src/common/utils/proxy/constants';
import { Employee } from 'src/common/models/ms-manager/class/employee.class';

@ApiTags('Manager/Employees')
@Controller('api/v1/manager/employee')
export class EmployeeController {
  constructor(private readonly clientProxy: ClientProxySupermarket) { }
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
  getEmployees() {
    return this.clientProxyManager.send(ManagerEmployeeMSG.GET_ALL, '');
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
  getEmployee(@Param('id') id: string) {
    return this.clientProxyManager.send(ManagerEmployeeMSG.GET_ONE, id);
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
  createEmployee(@Body() employee: EmployeeDTO) {
    return this.clientProxyManager.send(ManagerEmployeeMSG.CREATE, employee);
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
  updateEmployee(@Body() employee: EmployeeDTO, @Param('id') id: string) {
    return this.clientProxyManager.send(ManagerEmployeeMSG.UPDATE, { employee, id });
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
  deleteEmployee(@Param('id') id: string) {
    return this.clientProxyManager.send(ManagerEmployeeMSG.DELETE, id);
  }
}
