import {
  Column,
  Entity,
  JoinTable,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Farmyard } from './farmyard.entity';

@Entity()
export class Chicken {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'timestamptz' })
  birthday: Date;

  @Column()
  weight: number;

  @Column()
  steps: number;

  @Column()
  isRunning: boolean;

  @ManyToOne(() => Farmyard, (farmyard) => farmyard.id)
  farmyard: Farmyard;
}
