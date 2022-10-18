// Nest Imports
import { Controller } from '@nestjs/common';
// Dependencies
import { MessagePattern, Payload } from '@nestjs/microservices';
// Service
import { SupermarketService } from './supermarket.service';
// DTO
import { SupermarketDTO } from 'src/common/models/ms-manager/dto/supermarket.dto';
// Constants
import { ManagerSupermarketMSG } from 'src/common/utils/proxy/constants';

@Controller()
export class SupermarketController {
  constructor(private supermarketService: SupermarketService){}

  /** Create a manager */
  @MessagePattern(ManagerSupermarketMSG.CREATE)
  async createManager(@Payload() supermarket: SupermarketDTO) {
    return await this.supermarketService.createSupermarketService(supermarket['supermarket'], supermarket['idManager']);
  }

}
