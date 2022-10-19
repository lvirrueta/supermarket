import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ManagerEmployeeMSG } from 'src/common/utils/proxy/constants';
import { EmployeeDTO } from 'src/common/models/ms-manager/dto/employee.dto';
import { EmployeeService } from './employee.service';

@Controller()
export class EmployeeController {
  constructor(private employeeService: EmployeeService){}

  /** Get all Employees */
  @MessagePattern(ManagerEmployeeMSG.GET_ALL)
  async getAllEmployees() {
    return await this.employeeService.getAllEmployeesService();
  }

  /** Get one Employee by id */
  @MessagePattern(ManagerEmployeeMSG.GET_ONE)
  async getEmployeeByID(@Payload() id: string) {
    return await this.employeeService.getOneEmployeeService(id);
  }

  /** Create a Employee */
  @MessagePattern(ManagerEmployeeMSG.CREATE)
  async createEmployee(@Payload() employeeDTO: EmployeeDTO) {
    return await this.employeeService.createEmployeeService(employeeDTO);
  }

  /** Update a Employee */
  @MessagePattern(ManagerEmployeeMSG.UPDATE)
  async updateEmployee(@Payload() employeeDTO: EmployeeDTO) {
    return await this.employeeService.updateEmployeeService(employeeDTO['employee'], employeeDTO['id']);
  }

  /** Delete a Employee */
  @MessagePattern(ManagerEmployeeMSG.DELETE)
  async deleteEmployee(@Payload() id: string) {
    return await this.employeeService.deleteEmployeeService(id);
  }

}
