import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ManagerDepartmentMSG } from 'src/common/utils/proxy/constants';
import { DepartmentDTO } from 'src/common/models/ms-manager/dto/department.dto';

@Controller()
export class DepartmentController {

  /** Get all Departments */
  @MessagePattern(ManagerDepartmentMSG.GET_ALL)
  getAllDepartments() {
    return 'hi ms im get all';
  }

  /** Create a Department */
  @MessagePattern(ManagerDepartmentMSG.CREATE)
  createDepartment(@Payload() DepartmentDTO: DepartmentDTO) {
    return 'hi ms im create';
  }

  /** Update a Department */
  @MessagePattern(ManagerDepartmentMSG.UPDATE)
  updateDepartment(@Payload() DepartmentDTO: DepartmentDTO) {
    return 'hi ms im update';
  }

  /** Delete a Department */
  @MessagePattern(ManagerDepartmentMSG.DELETE)
  deleteDepartment(@Payload() id: string) {
    return 'hi ms im delete';
  }

}
