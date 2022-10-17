import { Controller, HttpException } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ManagerDTO } from 'src/common/models/ms-admin/dto/manager.dto';
import { AdminManagerMSG } from 'src/common/utils/proxy/constants';
import { ManagerService } from './manager.service';

@Controller()
export class ManagerController {
  constructor(private managerService: ManagerService){}

  /** Get all managers */
  @MessagePattern(AdminManagerMSG.GET_ALL)
  async getAllManagers() {
    return await this.managerService.getAllManagersService();
  }

  /** Get one manager by id */
  @MessagePattern(AdminManagerMSG.GET_ONE)
  getManagerByID(@Payload() id: string) {
    return 'hi ms im get one';
  }

  /** Create a manager */
  @MessagePattern(AdminManagerMSG.CREATE)
  async createManagerController(@Payload() managerDTO: ManagerDTO): Promise <boolean | HttpException> {
    return await this.managerService.createManagerService(managerDTO);
  }

  /** Update a manager */
  @MessagePattern(AdminManagerMSG.UPDATE)
  updateManager(@Payload() managerDTO: ManagerDTO) {
    return 'hi ms im update';
  }

  /** Delete a manager */
  @MessagePattern(AdminManagerMSG.DELETE)
  delete(@Payload() id: string) {
    return 'hi ms im delete';
  }

}
