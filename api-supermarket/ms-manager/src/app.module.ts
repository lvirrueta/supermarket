import { Module } from '@nestjs/common';
import { DepartmentController } from './department/department.controller';
import { DepartmentService } from './department/department.service';
import { EmployeeController } from './employee/employee.controller';
import { EmployeeService } from './employee/employee.service';
import { SupermarketController } from './supermarket/supermarket.controller';
import { SupermarketService } from './supermarket/supermarket.service';

@Module({
  imports: [],
  controllers: [ DepartmentController, EmployeeController, SupermarketController ],
  providers: [ DepartmentService, EmployeeService, SupermarketService ],
})
export class AppModule {}
