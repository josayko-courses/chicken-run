import { PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsString,
  IsDateString,
  IsOptional,
  IsNumber,
  IsBoolean,
  ValidateNested,
} from 'class-validator';
import { Farmyard } from '../entities/farmyard.entity';

// PartialType returns the type passed into it and mark all the fields as optional
export class UpdateChickenDto {
  @IsString()
  @IsOptional()
  readonly name: string;

  @IsDateString()
  @IsOptional()
  readonly birthday;

  @IsNumber()
  @IsOptional()
  readonly weight: number;

  @IsNumber()
  @IsOptional()
  readonly steps: number;

  @IsBoolean()
  @IsOptional()
  readonly isRunning;

  @IsOptional()
  @Type(() => Farmyard)
  @ValidateNested({ each: true })
  readonly farmyard: Farmyard;
}
