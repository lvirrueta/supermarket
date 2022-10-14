import { Module } from '@nestjs/common';
import { SupermarketController } from './supermarket/supermarket.controller';
import { DepartmentController } from './department/department.controller';
import { EmployeeController } from './employee/employee.controller';
import { ProxyModule } from 'src/common/proxy/proxy.module';

@Module({
  imports: [ProxyModule],
  controllers: [SupermarketController, DepartmentController, EmployeeController]
})
export class ManagerModule {}
