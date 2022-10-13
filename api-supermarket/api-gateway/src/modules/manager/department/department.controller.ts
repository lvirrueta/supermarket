import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { DepartmentDTO } from './dto/department.dto';
import { ClientProxySupermarket } from 'src/common/proxy/client-proxy';
import { ManagerDepartmentMSG } from 'src/common/proxy/constants';


@Controller('api/v1/manager/department')
export class DepartmentController {
  constructor(private readonly clientProxy: ClientProxySupermarket) { }
  private clientProxyManager = this.clientProxy.clientProxyManager();

  @Get('get')
  getDepartments() {
    return this.clientProxyManager.send(ManagerDepartmentMSG.GET_ALL, '');
  }
  
  @Post('create')
  createDepartment(@Body() department: DepartmentDTO) {
    return this.clientProxyManager.send(ManagerDepartmentMSG.CREATE, department);
  }

  @Put('update/:id')
  updateDepartment(@Body() department: DepartmentDTO, @Param('id') id: string) {
    return this.clientProxyManager.send(ManagerDepartmentMSG.UPDATE, {department, id});
  }

  @Delete('delete/:id')
  deleteDepartments(@Param('id') id: string) {
    return this.clientProxyManager.send(ManagerDepartmentMSG.DELETE, id);
  }

}
