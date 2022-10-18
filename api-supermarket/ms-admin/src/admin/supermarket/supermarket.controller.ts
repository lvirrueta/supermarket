import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AdminSupermarketMSG } from 'src/common/utils/proxy/constants';
import { SupermarketService } from './supermarket.service';

@Controller()
export class SupermarketController {
  constructor(private supermarketService: SupermarketService){}

  /** Get all supermarkets */
  @MessagePattern(AdminSupermarketMSG.GET_ALL)
  async getAllSupermarkets() {
    return await this.supermarketService.getAllSupermarketsService();
  }

  /** Get one supermarket by id */
  @MessagePattern(AdminSupermarketMSG.GET_ONE)
  async getSupermarketByID(@Payload() id: string) {
    return await this.supermarketService.getOneSupermarketService( id );
  }

}
