import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChickensController } from './chickens.controller';
import { ChickensService } from './chickens.service';
import { Chicken } from './entities/chicken.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Chicken])],
  controllers: [ChickensController],
  providers: [ChickensService],
})
export class ChickensModule {}
