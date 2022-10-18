// Nest Imports
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// Dependencies
import { DataSource, QueryRunner } from 'typeorm';
// Entities
import { DepartmentEntity } from 'src/common/entities/department.entity';
// DTO
import { DepartmentDTO } from 'src/common/models/ms-manager/dto/department.dto';

@Injectable()
export class DepartmentService {
  constructor(
    private readonly dataSource: DataSource,
  ) { }

  // --------------- Service Controllers --------------------

  /** Get all departments */
  public async getAllDepartmentsService(): Promise<DepartmentEntity[]> {
    try {
      return await this.findAllDepartments();
    } catch (error) {
      return error;
    }
  }

  /** Create a department */
  public async createDepartmentService( department: DepartmentDTO ): Promise<boolean | HttpException> {
    try {
      await this.saveDepartment(department);
      return true; 
    } catch (error) {
      return error;
    }
  }

  /** Update department
   * @param {DepartmentDTO} departmentDTO
   * @param {string} id
  */
  public async updateDepartmentService( departmentDTO: DepartmentDTO, id: string ): Promise<boolean | HttpException> {
    try {
      await this.updateDepartment(departmentDTO, id);
      return true; 
    } catch (error) {
      return error;
    }
  }

  /** Delete department */
  public async deleteDepartmentService( id: string ): Promise<boolean> {
    try {
      await this.deleteDepartment(id);
      return true;
    } catch (error) {
      return error;
    }
  }

  // --------------- Database Connections --------------------

  /** Get all departments from database */
  private async findAllDepartments(): Promise<DepartmentEntity[]> {
    const queryRunner = await this.startConnection();
    try {
      const departments = await queryRunner.manager.find(DepartmentEntity)
      await queryRunner.release();
      return departments;
    } catch (error) {
      await queryRunner.release();
      throw error
    }
  }

  /** Save department to database */
  private async saveDepartment( department: DepartmentDTO ): Promise<boolean> {
    const queryRunner = await this.startConnection();
    try {
      await queryRunner.manager.save(DepartmentEntity, department);
      await queryRunner.release();
      return true;
    } catch (error) {
      await queryRunner.release();
      throw error;
    }
  }

  /** Update Department to database 
   * @param {DepartmentDTO} department
   * @param {string} id
  */
  private async updateDepartment( department: DepartmentDTO, id: string ): Promise<boolean> {
    const queryRunner = await this.startConnection();
    try {
      await queryRunner.manager.update(DepartmentEntity, id, department);
      await queryRunner.release();
      return true;
    } catch (error) {
      await queryRunner.release();
      throw error;
    }
  }

  /** Delete department from database */
  private async deleteDepartment( id: string ): Promise<boolean> {
    const queryRunner = await this.startConnection();
    try {
      await queryRunner.manager.delete(DepartmentEntity, id);
      await queryRunner.release();
      return true;
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
