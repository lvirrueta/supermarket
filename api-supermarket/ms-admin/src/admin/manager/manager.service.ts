// Nest Imports
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// Dependencies
import { DataSource, QueryRunner } from 'typeorm';
// Entities
import { ManagerEntity } from 'src/common/entities/manager.entity';
// DTO
import { ManagerDTO } from 'src/common/models/ms-admin/dto/manager.dto';

@Injectable()
export class ManagerService {
  constructor(
    private readonly dataSource: DataSource,
  ) { }

  // --------------- Service Controllers --------------------

  /** Get all managers */
  public async getAllManagersService(): Promise<ManagerEntity[]> {
    try {
      return await this.findAllManagers();
    } catch (error) {
      return error;
    }
  }

  /** Get one manager */
  public async getOneManagerService( id: string ): Promise<ManagerEntity> {
    try {
      return await this.findManagerByID( id );
    } catch (error) {
      return error;
    }
  }

  /** Create a manager */
  public async createManagerService( manager: ManagerDTO ): Promise<boolean | HttpException> {
    try {
      const managerSaved = await this.findManagerByEmail(manager.email);
      if (managerSaved){
        return new HttpException(
          'Conflict: This email is already registered',
          HttpStatus.CONFLICT
        )
      }
      await this.saveManager(manager);
      return true; 
    } catch (error) {
      return error;
    }
  }

  /** Update manager
   * @param {ManagerDTO} manager
   * @param {string} id
  */
  public async updateManagerService( managerDTO: ManagerDTO, id: string ): Promise<boolean | HttpException> {
    try {
      const managerByID = await this.findManagerByID(id, ['supermarket']);
      if (!managerByID){
        return new HttpException(
          'Conflict: This id is not registered',
          HttpStatus.CONFLICT
        )
      }
      if (managerByID.email !== managerDTO.email){
        const managerByEmail = await this.findManagerByEmail(managerDTO.email);
        if (managerByEmail){
          return new HttpException(
            'Conflict: This email is already registered',
            HttpStatus.CONFLICT
          )
        }
      }
      const managerEntity: ManagerEntity = {
        id: id, 
        supermarket: managerByID.supermarket,
        ...managerDTO, 
      }
      console.log(managerEntity);
      await this.updateManager(managerEntity);
      return true; 
    } catch (error) {
      return error;
    }
  }

  // --------------- Database Connections --------------------

  /** Get all managers from database */
  private async findAllManagers(): Promise<ManagerEntity[]> {
    const queryRunner = await this.startConnection();
    try {
      const managers = await queryRunner.manager.find(ManagerEntity,{
        relations: ['supermarket'],
      })
      await queryRunner.release();
      return managers;
    } catch (error) {
      await queryRunner.release();
      throw error
    }
  }

  /** Save manager to database */
  private async updateManager( manager: ManagerEntity ): Promise<boolean> {
    const queryRunner = await this.startConnection();
    try {
      await queryRunner.manager.update(ManagerEntity, manager.id, manager);
      await queryRunner.release();
      return true;
    } catch (error) {
      await queryRunner.release();
      throw error;
    }
  }

  /** Save manager to database */
  private async saveManager( manager: ManagerDTO ): Promise<boolean> {
    const queryRunner = await this.startConnection();
    try {
      await queryRunner.manager.save(ManagerEntity, manager);
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

  /** Find manager by email from database */
  private async findManagerByEmail( email: string ): Promise<ManagerEntity> {
    const queryRunner = await this.startConnection();
    try {
      const manager = await queryRunner.manager.findOne(
        ManagerEntity, {
          where: {
            email: email,
          }
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
    if ( withTransaction ) await queryRunner.startTransaction();
    return queryRunner;
  }

}
