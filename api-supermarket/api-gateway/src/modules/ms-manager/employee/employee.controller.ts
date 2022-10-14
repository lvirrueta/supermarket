import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body
} from '@nestjs/common';
import { EmployeeDTO } from '../../../common/models/ms-manager/dto/employee.dto';
import { ClientProxySupermarket } from 'src/common/utils/proxy/client-proxy';
import { ManagerEmployeeMSG } from 'src/common/utils/proxy/constants';

@Controller('api/v1/manager/employee')
export class EmployeeController {
  constructor(private readonly clientProxy: ClientProxySupermarket) { }
  private clientProxyManager = this.clientProxy.clientProxyManager();

  @Get('get')
  getEmployees() {
    return this.clientProxyManager.send(ManagerEmployeeMSG.GET_ALL, '');
  }

  @Get('get/:id')
  getEmployee(@Param('id') id: string) {
    return this.clientProxyManager.send(ManagerEmployeeMSG.GET_ONE, id);
  }

  @Post('create')
  createEmployee(@Body() employee: EmployeeDTO) {
    return this.clientProxyManager.send(ManagerEmployeeMSG.CREATE, employee);
  }

  @Put('update/:id')
  updateEmployee(@Body() employee: EmployeeDTO, @Param('id') id: string) {
    return this.clientProxyManager.send(ManagerEmployeeMSG.UPDATE, {employee, id});
  }

  @Delete('delete/:id')
  deleteEmployee(@Param('id') id: string) {
    return this.clientProxyManager.send(ManagerEmployeeMSG.UPDATE, id);
  }
}
