import { Module } from '@nestjs/common';
import { SupermarketController } from './supermarket/supermarket.controller';
import { DepartmentController } from './department/department.controller';
import { EmployeeController } from './employee/employee.controller';

@Module({
  controllers: [SupermarketController, DepartmentController, EmployeeController]
})
export class ManagerModule {}
