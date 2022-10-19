import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { DepartmentEntity } from './department.entity';

@Entity({ name: 'employee' })
export class EmployeeEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  fathersLastName: string;

  @Column()
  mothersLastName: string;

  @Column()
  phone: number;

  @Column()
  workingDays: string;

  @Column({ unique: true })
  customID: string;

  @ManyToOne(
    () => DepartmentEntity,
    (department) => department.employees,
    { onDelete: 'CASCADE' },
  )
  department: DepartmentEntity;
}
