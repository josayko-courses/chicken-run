import { IsString } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Farmyard {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString()
  @Column()
  name: string;
}
