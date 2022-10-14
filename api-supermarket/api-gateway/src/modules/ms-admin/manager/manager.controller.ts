import {
  Controller,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { ClientProxySupermarket } from 'src/common/proxy/client-proxy';
import { AdminManagerMSG } from 'src/common/proxy/constants';
import { ManagerDTO } from '../manager/dto/manager.dto';

@Controller('api/v1/admin/manager')
export class ManagerController {
  constructor(private readonly clientProxy: ClientProxySupermarket) { }
  private clientProxyAdmin = this.clientProxy.clientProxyAdmin();

  @Get('/get')
  getAllManagers() {
    return this.clientProxyAdmin.send(AdminManagerMSG.GET_ALL, '');
  }

  @Get('get/:id')
  getManagerByID(@Param('id') id: string) {
    return this.clientProxyAdmin.send(AdminManagerMSG.GET_ONE, id);
  }

  @Post('/create')
  createManager(@Body() ManagerDTO: ManagerDTO) {
    return this.clientProxyAdmin.send(AdminManagerMSG.CREATE, ManagerDTO);
  }

  @Put('/update/:id')
  updateManager(@Param('id') id: string, @Body() ManagerDTO: ManagerDTO) {
    return this.clientProxyAdmin.send(AdminManagerMSG.UPDATE, { ManagerDTO, id });
  }

  @Delete('/delete/:id')
  delete(@Param('id') id: string) {
    return this.clientProxyAdmin.send(AdminManagerMSG.DELETE, id);
  }

}
