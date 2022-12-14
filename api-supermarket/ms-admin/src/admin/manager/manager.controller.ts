// Nest Imports
import { Controller, HttpException } from '@nestjs/common';
// Dependencies
import { MessagePattern, Payload } from '@nestjs/microservices';
// Services
import { ManagerService } from './manager.service';
// Entities
import { ManagerEntity } from 'src/common/entities/manager.entity';
// DTO
import { ManagerDTO } from 'src/common/models/ms-admin/dto/manager.dto';
// Constants
import { AdminManagerMSG } from 'src/common/utils/proxy/constants';

@Controller()
export class ManagerController {
  constructor(private managerService: ManagerService){}

  /** Get all managers */
  @MessagePattern(AdminManagerMSG.GET_ALL)
  async getAllManagers(): Promise<ManagerEntity[]> {
    return await this.managerService.getAllManagersService();
  }

  /** Get one manager by id */
  @MessagePattern(AdminManagerMSG.GET_ONE)
  async getManagerByID(@Payload() id: string): Promise<ManagerEntity | HttpException> {
    return await this.managerService.getOneManagerService(id);
  }

  /** Create a manager */
  @MessagePattern(AdminManagerMSG.CREATE)
  async createManagerController(@Payload() managerDTO: ManagerDTO): Promise <boolean | HttpException> {
    return await this.managerService.createManagerService(managerDTO);
  }

  /** Update a manager */
  @MessagePattern(AdminManagerMSG.UPDATE)
  async updateManager(@Payload() managerDTO: ManagerDTO): Promise <boolean | HttpException> {
    return await this.managerService.updateManagerService(managerDTO['ManagerDTO'], managerDTO['id']);
  }

  /** Delete a manager */
  @MessagePattern(AdminManagerMSG.DELETE)
  async delete(@Payload() id: string): Promise<boolean> {
    return await this.managerService.deleteManagerService(id);
  }

}
