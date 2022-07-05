import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createQueryBuilder, Repository } from 'typeorm';
import { CreateChickenDto } from './dto/create-chicken.dto';
import { UpdateChickenDto } from './dto/update-chicken.dto';
import { Chicken } from './entities/chicken.entity';

@Injectable()
export class ChickensService {
  constructor(
    @InjectRepository(Chicken)
    private readonly chickenRepository: Repository<Chicken>,
  ) {}

  findAll() {
    return this.chickenRepository.find();
  }

  async findOne(id: string) {
    const chicken = await this.chickenRepository.findOne({
      where: { id: +id },
    });
    if (!chicken) {
      throw new NotFoundException(`Chicken with id #${id} not found`);
    }
    return chicken;
  }

  create(createChickenDto: CreateChickenDto) {
    const chicken = this.chickenRepository.create(createChickenDto);
    return this.chickenRepository.save(chicken);
  }

  // TypeOrm: preload find and update if found
  async update(id: string, updateChickenDto: UpdateChickenDto) {
    const chicken = await this.chickenRepository.preload({
      id: +id,
      ...updateChickenDto,
    });
    if (!chicken) {
      throw new NotFoundException(`Chicken with id #${id} not found`);
    }
    return this.chickenRepository.save(chicken);
  }

  // TypeOrm: findOne throws an error when not found
  async remove(id: string) {
    const chicken = await this.findOne(id);
    return this.chickenRepository.remove(chicken);
  }

  // Procedural loop
  // https://www.darraghoriordan.com/2022/06/13/persistence-7-typeorm-postgres-9-tips-tricks-issues
  async run() {
    await this.chickenRepository.increment({ isRunning: true }, 'steps', 1);
    return this.findAll();
  }
}
