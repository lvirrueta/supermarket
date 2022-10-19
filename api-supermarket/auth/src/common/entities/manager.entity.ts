import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SupermarketEntity } from './supermarket.entity';

@Entity({ name: 'manager' })
export class ManagerEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column({name: 'fathers_last_name'})
  fathersLastName: string;

  @Column({name: 'mothers_last_name'})
  mothersLastName: string;

  @Column({name: 'born_date'})
  bornDate: Date;

  @Column()
  genere: string;

  @Column({unique: true})
  email: string;

  @Column({ type: 'bigint' })
  phone: number;

  @Column()
  password: string;

  @OneToOne(
    () => SupermarketEntity,
    (supermarket) => supermarket.manager,
  )
  @JoinColumn()
  supermarket: SupermarketEntity;
}
