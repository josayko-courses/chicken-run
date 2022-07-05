import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column({ nullable: true })
  farmyard: number;
}
