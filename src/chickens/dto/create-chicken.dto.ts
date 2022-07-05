import {
  IsString,
  IsDateString,
  IsNumber,
  IsOptional,
  IsBoolean,
} from 'class-validator';
import { Farmyard } from '../entities/farmyard.entity';

export class CreateChickenDto {
  @IsString()
  readonly name: string;

  @IsDateString()
  @IsOptional()
  readonly birthday: string = new Date().toISOString();

  @IsNumber()
  readonly weight: number;

  @IsNumber()
  @IsOptional()
  readonly steps: number = 0;

  @IsBoolean()
  @IsOptional()
  readonly isRunning: boolean = false;

  @IsNumber()
  @IsOptional()
  readonly farmyard: Farmyard;
}
