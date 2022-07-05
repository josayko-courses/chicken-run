import { Module } from '@nestjs/common';
import { ChickensController } from './chickens.controller';
import { ChickensService } from './chickens.service';

@Module({ controllers: [ChickensController], providers: [ChickensService] })
export class ChickensModule {}
