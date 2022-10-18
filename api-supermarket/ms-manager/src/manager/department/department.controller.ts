// Nest Imports
import { Controller } from '@nestjs/common';
// Dependencies
import { MessagePattern, Payload } from '@nestjs/microservices';
// Services
import { DepartmentService } from './department.service';
// DTO
import { DepartmentDTO } from 'src/common/models/ms-manager/dto/department.dto';
// Constants
import { ManagerDepartmentMSG } from 'src/common/utils/proxy/constants';

@Controller()
export class DepartmentController {
  constructor(private departmentService: DepartmentService) {}

  /** Get all Departments */
  @MessagePattern(ManagerDepartmentMSG.GET_ALL)
  async getAllDepartments() {
    return await this.departmentService.getAllDepartmentsService();
  }

  /** Create a Department */
  @MessagePattern(ManagerDepartmentMSG.CREATE)
  async createDepartment(@Payload() departmentDTO: DepartmentDTO) {
    return await this.departmentService.createDepartmentService(departmentDTO);
  }

  /** Update a Department */
  @MessagePattern(ManagerDepartmentMSG.UPDATE)
  async updateDepartment(@Payload() departmentDTO: DepartmentDTO) {
    return await this.departmentService.updateDepartmentService( departmentDTO['department'], departmentDTO['id'] )
  }

  /** Delete a Department */
  @MessagePattern(ManagerDepartmentMSG.DELETE)
  async deleteDepartment(@Payload() id: string) {
    return await this.departmentService.deleteDepartmentService(id);
  }

}
