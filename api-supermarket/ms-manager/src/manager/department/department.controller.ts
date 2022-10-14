import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SupermarketDTO } from 'src/common/models/ms-manager/dto/supermarket.dto';
import { ManagerSupermarketMSG } from 'src/common/utils/proxy/constants';

@Controller()
export class DepartmentController {

  /** Create a manager */
  @MessagePattern(ManagerSupermarketMSG.CREATE)
  createManager(@Payload() supermarket: SupermarketDTO) {
    return 'hi ms im create';
  }

}
