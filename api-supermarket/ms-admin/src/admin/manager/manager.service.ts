import { HttpException, Injectable } from '@nestjs/common';
import { ManagerEntity } from 'src/common/entities/managet.entity';
import { ManagerDTO } from 'src/common/models/ms-admin/dto/manager.dto';
import { DataSource, QueryRunner } from 'typeorm';

@Injectable()
export class ManagerService {
  constructor(
    private readonly dataSource: DataSource,
  ) { }

  /** Create a manager */
  public async createManagerService(manager: ManagerDTO): Promise< boolean | HttpException > {
    const queryRunner = await this.startTransaction();
    try {
      await queryRunner.manager.save(ManagerEntity, manager);
      await queryRunner.commitTransaction();
      await queryRunner.release();
      return true;
    } catch (error) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();
      return error;
    }
  }

  /** Start a transaction */
  private async startTransaction(): Promise<QueryRunner> {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();
    return queryRunner;
  }
}
