import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SupermarketEntity } from './supermarket.entity';
import { EmployeeEntity } from './employee.entity';

@Entity({ name: 'department' })
export class DepartmentEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @ManyToOne(
    () => SupermarketEntity,
    (supermercado) => supermercado.departamentos,
  )
  supermarket: SupermarketEntity;

  @OneToMany(() => EmployeeEntity, (employee) => employee.department, {
    onDelete: 'CASCADE',
  })
  @JoinColumn()
  employees: EmployeeEntity;
}
