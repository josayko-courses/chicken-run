import { Injectable, NotFoundException } from '@nestjs/common';
import { Chicken } from './entities/chicken.entity';

@Injectable()
export class ChickensService {
  private chickens: Chicken[] = [
    {
      id: 1,
      name: 'Chicken-01',
      birthday: new Date('2021-12-12'),
      weight: 2,
      steps: 0,
      isRunning: false,
    },
  ];

  findAll() {
    return this.chickens;
  }

  findOne(id: string) {
    const chicken = this.chickens.find((item) => item.id === +id);
    if (!chicken) {
      throw new NotFoundException(`Chicken #${id} not found`);
    }
    return chicken;
  }

  create(createCoffeeDto: any) {
    this.chickens.push(createCoffeeDto);
  }

  update(id: string, updateChickenDto: any) {
    const existingChicken = this.findOne(id);
    if (existingChicken) {
      // update the existing entity
    }
  }

  updateAll(id: string, updateChickenDto: any) {
    const existingChicken = this.findOne(id);
    if (existingChicken) {
      // update the existing entity
    }
  }

  remove(id: string) {
    const chickenIndex = this.chickens.findIndex((item) => item.id === +id);
    if (chickenIndex >= 0) {
      this.chickens.splice(chickenIndex, 1);
    }
  }
}
