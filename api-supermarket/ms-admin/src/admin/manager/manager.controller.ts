import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ManagerDTO } from 'src/common/models/ms-admin/dto/manager.dto';
import { AdminManagerMSG } from 'src/common/utils/proxy/constants';

@Controller()
export class ManagerController {

  /** Get all managers */
  @MessagePattern(AdminManagerMSG.GET_ALL)
  getAllManagers() {
    return 'hi ms im get all';
  }

  /** Get one manager by id */
  @MessagePattern(AdminManagerMSG.GET_ONE)
  getManagerByID(@Payload() id: string) {
    return 'hi ms im get one';
  }

  /** Create a manager */
  @MessagePattern(AdminManagerMSG.CREATE)
  createManager(@Payload() managerDTO: ManagerDTO) {
    return 'hi ms im create';
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
