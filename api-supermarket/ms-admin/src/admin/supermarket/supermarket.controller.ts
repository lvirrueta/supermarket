import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AdminSupermarketMSG } from 'src/common/utils/proxy/constants';

@Controller()
export class SupermarketController {

  /** Get all supermarkets */
  @MessagePattern(AdminSupermarketMSG.GET_ALL)
  getAllSupermarkets() {
    return 'hi ms im get all';
  }

  /** Get one supermarket by id */
  @MessagePattern(AdminSupermarketMSG.GET_ONE)
  getSupermarketByID(@Payload() id: string) {
    return 'hi ms im get one';
  }

}
