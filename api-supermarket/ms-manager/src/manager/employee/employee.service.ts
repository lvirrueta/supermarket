// Nest Imports
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
// Dependencies
import { DataSource, QueryRunner } from 'typeorm';
// Entities
import { EmployeeEntity } from 'src/common/entities/employee.entity';
// DTO
import { EmployeeDTO } from 'src/common/models/ms-manager/dto/employee.dto';

@Injectable()
export class EmployeeService {
  constructor(
    private readonly dataSource: DataSource,
  ) { }
  
  // --------------- Service Controllers --------------------

  /** Get all employees */
  public async getAllEmployeesService(): Promise<EmployeeEntity[]> {
    try {
      return await this.findAllEmployees();
    } catch (error) {
      return error;
    }
  }

  /** Get one employee */
  public async getOneEmployeeService( id: string ): Promise<EmployeeEntity | HttpException> {
    try {
      const employee = await this.findEmployeeByID( id );
      if (employee) {
        return employee
      } else {
        return new HttpException(
          'Not Found: Employee not found',
          HttpStatus.NOT_FOUND
        )
      };
    } catch (error) {
      return error;
    }
  }

  /** Create a employee */
  public async createEmployeeService( employee: EmployeeDTO ): Promise<boolean | HttpException> {
    try {
      await this.saveEmployee(employee);
      return true; 
    } catch (error) {
      return error;
    }
  }

  /** Update employee
   * @param {EmployeeDTO} employee
   * @param {string} id
  */
  public async updateEmployeeService( employee: EmployeeDTO, id: string ): Promise<boolean | HttpException> {
    try {
      await this.updateEmployee(employee, id);
      return true; 
    } catch (error) {
      return error;
    }
  }

  /** Delete employee */
  public async deleteEmployeeService( id: string ): Promise<boolean> {
    try {
      await this.deleteEmployeeById(id);
      return true;
    } catch (error) {
      return error;
    }
  }

  // --------------- Database Connections --------------------

  /** Get all employees from database */
  private async findAllEmployees(): Promise<EmployeeEntity[]> {
    const queryRunner = await this.startConnection();
    try {
      const employees = await queryRunner.manager.find(EmployeeEntity)
      await queryRunner.release();
      return employees;
    } catch (error) {
      await queryRunner.release();
      throw error
    }
  }

  /** Find employee by id from database */
  private async findEmployeeByID( id: string, relations: string[] = [] ): Promise<EmployeeEntity> {
    const queryRunner = await this.startConnection();
    try {
      const employee = await queryRunner.manager.findOne(
        EmployeeEntity, {
          where: {
            id: id,
          },
          relations: relations,
        }
      )
      await queryRunner.release();
      return employee;
    } catch (error) {
      await queryRunner.release();
      throw error;
    }
  }

  /** Save employee to database */
  private async saveEmployee( employee: EmployeeDTO ): Promise<boolean> {
    const queryRunner = await this.startConnection();
    try {
      await queryRunner.manager.save(EmployeeEntity, employee);
      await queryRunner.release();
      return true;
    } catch (error) {
      await queryRunner.release();
      throw error;
    }
  }

  /** Update employee to database */
  private async updateEmployee( employee: EmployeeDTO, id: string ): Promise<boolean> {
    const queryRunner = await this.startConnection();
    try {
      await queryRunner.manager.update(EmployeeEntity, id, employee);
      await queryRunner.release();
      return true;
    } catch (error) {
      await queryRunner.release();
      throw error;
    }
  }

  /** Delete employee from database */
  private async deleteEmployeeById( id: string ): Promise<boolean> {
    const queryRunner = await this.startConnection();
    try {
      await queryRunner.manager.delete(EmployeeEntity, id);
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
