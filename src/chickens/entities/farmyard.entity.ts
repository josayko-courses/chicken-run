import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Farmyard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
