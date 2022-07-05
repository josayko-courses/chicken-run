import { PartialType } from '@nestjs/mapped-types';
import { CreateChickenDto } from './create-chicken.dto';

// PartialType returns the type passed into it and mark all the fields as optional
export class UpdateChickenDto extends PartialType(CreateChickenDto) {}
