import {
  IsString,
  IsDateString,
  IsNumber,
  IsOptional,
  IsBoolean,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
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

  @IsOptional()
  @Type(() => Farmyard)
  @ValidateNested({ each: true })
  readonly farmyard: Farmyard;
}
