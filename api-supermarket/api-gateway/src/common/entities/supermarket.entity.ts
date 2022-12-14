import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { DepartmentEntity } from './department.entity';
import { ManagerEntity } from './manager.entity';

@Entity({ name: 'supermarket' })
export class SupermarketEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column({name: 'business_name'})
  businessName: string;

  @Column()
  state: string;

  @Column()
  email: string;

  @Column({ type: 'bigint' })
  phone: number;

  @Column()
  street: string;

  @Column()
  number: number;

  @Column()
  suburb: string;

  @Column()
  city: string;

  @Column({name: 'postal_code'})
  postalCode: number;

  @OneToOne(() => ManagerEntity, (encargado) => encargado.supermarket)
  manager: ManagerEntity;

  @OneToMany(
    () => DepartmentEntity,
    (department) => department.supermarket,
  )
  departments: DepartmentEntity[];
}
