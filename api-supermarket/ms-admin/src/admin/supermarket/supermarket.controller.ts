// Nest Imports
import { Controller } from '@nestjs/common';
// Dependencies
import { MessagePattern, Payload } from '@nestjs/microservices';
// Service
import { SupermarketService } from './supermarket.service';
// Constants
import { AdminSupermarketMSG } from 'src/common/utils/proxy/constants';

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
