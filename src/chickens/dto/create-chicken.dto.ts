import {
  IsString,
  IsDateString,
  IsNumber,
  IsOptional,
  IsBoolean,
} from 'class-validator';

export class CreateChickenDto {
  @IsString()
  readonly name: string;

  @IsDateString()
  @IsOptional()
  readonly birthday: Date;

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
  readonly farmyard: number;
}
