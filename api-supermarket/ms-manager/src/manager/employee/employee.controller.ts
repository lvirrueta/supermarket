import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ManagerEmployeeMSG } from 'src/common/utils/proxy/constants';
import { EmployeeDTO } from 'src/common/models/ms-manager/dto/employee.dto';

@Controller()
export class EmployeeController {

  /** Get all Employees */
  @MessagePattern(ManagerEmployeeMSG.GET_ALL)
  getAllEmployees() {
    return 'hi ms im get all';
  }

  /** Get one Employee by id */
  @MessagePattern(ManagerEmployeeMSG.GET_ONE)
  getEmployeeByID(@Payload() id: string) {
    return 'hi ms im get one';
  }

  /** Create a Employee */
  @MessagePattern(ManagerEmployeeMSG.CREATE)
  createEmployee(@Payload() EmployeeDTO: EmployeeDTO) {
    return 'hi ms im create';
  }

  /** Update a Employee */
  @MessagePattern(ManagerEmployeeMSG.UPDATE)
  updateEmployee(@Payload() EmployeeDTO: EmployeeDTO) {
    return 'hi ms im update';
  }

  /** Delete a Employee */
  @MessagePattern(ManagerEmployeeMSG.DELETE)
  deleteEmployee(@Payload() id: string) {
    return 'hi ms im delete';
  }

}
