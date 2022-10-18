// Nest Imports
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// Dependencies
import { DataSource, QueryRunner } from 'typeorm';
// Entities
import { ManagerEntity } from 'src/common/entities/manager.entity';
import { SupermarketEntity } from 'src/common/entities/supermarket.entity';
// DTO
import { SupermarketDTO } from 'src/common/models/ms-manager/dto/supermarket.dto';

@Injectable()
export class SupermarketService {
  constructor(
    private readonly dataSource: DataSource,
  ) { }

  // --------------- Service Controllers --------------------

  /** Create supermarket 
   * @param {SupermarketDTO} supermarket
   * @param {string} idManager
  */
  public async createSupermarketService( supermarket: SupermarketDTO, idManager: string ): Promise<boolean | HttpException > {
    const manager = await this.findManagerByID(idManager, ['supermarket']);
    const newSupermarket: SupermarketEntity = {
      id: null,
      manager: manager,
      departments: null,
      ...supermarket,
    }
    if (!manager){
      return new HttpException(
        `Not Found: Manager not found`,
        HttpStatus.NOT_FOUND
      )
    }
    if(manager.supermarket){
      return new HttpException(
        `Forbidden: This manager already has a supermarket`,
        HttpStatus.FORBIDDEN
      )
    }
    try {
      await this.saveSupermarket(newSupermarket);
      return true;
    } catch (error) {
      return error;
    }
  }

  // --------------- Database Connections --------------------

  /** Create supermarket to database */
  private async saveSupermarket( supermarket: SupermarketDTO ): Promise<boolean> {
    const queryRunner = await this.startConnection();
    try {
      await queryRunner.manager.save(SupermarketEntity, supermarket);
      await queryRunner.release();
      return true;
    } catch (error) {
      await queryRunner.release();
      throw error;
    }
  }

  /** Find manager by id from database */
  private async findManagerByID( id: string, relations: string[] = [] ): Promise<ManagerEntity> {
    const queryRunner = await this.startConnection();
    try {
      const manager = await queryRunner.manager.findOne(
        ManagerEntity, {
          where: {
            id: id,
          },
          relations: relations,
        }
      )
      await queryRunner.release();
      return manager;
    } catch (error) {
      await queryRunner.release();
      throw error;
    }
  }

  /** Start a connection 
  * @param {boolean} withTransaction - Its an optional argument, put it true, if you want to start a transaction
  * @return {QueryRunner} return a QueryRunner
  */
  private async startConnection( withTransaction: boolean = false ): Promise<QueryRunner> {
    const queryRunner = await this.dataSource.createQueryRunner();
    await queryRunner.connect();
    if (withTransaction) await queryRunner.startTransaction();
    return queryRunner;
  }
}
