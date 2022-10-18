import { Module } from '@nestjs/common';
import { SupermarketController } from './supermarket/supermarket.controller';
import { DepartmentController } from './department/department.controller';
import { EmployeeController } from './employee/employee.controller';
import { ProxyModule } from 'src/common/utils/proxy/proxy.module';
import { ErrorService } from 'src/common/utils/errors/error.service';

@Module({
  imports: [ProxyModule],
  controllers: [SupermarketController, DepartmentController, EmployeeController],
  providers: [ErrorService],

})
export class ManagerModule {}
