import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// Dependencies
import { DataSource, QueryRunner } from 'typeorm';
// Entities
import { SupermarketEntity } from 'src/common/entities/supermarket.entity';

@Injectable()
export class SupermarketService {
  constructor(
    private readonly dataSource: DataSource,
  ) { }

  // --------------- Service Controllers --------------------

  /** Get all supermarkets */
  public async getAllSupermarketsService(): Promise<SupermarketEntity[]> {
    try {
      return await this.findAllSupermarkets();
    } catch (error) {
      return error;
    }
  }

  /** Get one supermarket */
  public async getOneSupermarketService( id: string ): Promise<SupermarketEntity | HttpException> {
    try {
      const supermarket = await this.findSupermarketByID( id );
      if (supermarket) {
        return supermarket
      } else {
        return new HttpException(
          'Not Found: Supermarket not found',
          HttpStatus.NOT_FOUND
        )
      };
    } catch (error) {
      return error;
    }
  }

  // --------------- Database Connections --------------------

  /** Get all supermarkets from database */
  private async findAllSupermarkets(): Promise<SupermarketEntity[]> {
    const queryRunner = await this.startConnection();
    try {
      return await queryRunner.manager.find(SupermarketEntity);
    } catch (error) {
      await queryRunner.release();
      throw error
    }
  }

  /** Find supermarket by id from database */
  private async findSupermarketByID( id: string ): Promise<SupermarketEntity> {
    const queryRunner = await this.startConnection();
    try {
      const supermarket = await queryRunner.manager.findOne(
        SupermarketEntity, {
          where: {
            id: id,
          },
        }
      )
      await queryRunner.release();
      return supermarket;
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
