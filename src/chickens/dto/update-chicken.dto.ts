import {
  IsString,
  IsDateString,
  IsOptional,
  IsNumber,
  IsBoolean,
  ValidateNested,
} from 'class-validator';
import { Farmyard } from '../entities/farmyard.entity';

export class UpdateChickenDto {
  @IsString()
  @IsOptional()
  readonly name: string;

  @IsDateString()
  @IsOptional()
  readonly birthday: string;

  @IsNumber()
  @IsOptional()
  readonly weight: number;

  @IsNumber()
  @IsOptional()
  readonly steps: number;

  @IsBoolean()
  @IsOptional()
  readonly isRunning: boolean;

  @IsOptional()
  @ValidateNested({ each: true })
  readonly farmyard: Farmyard;
}
