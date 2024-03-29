import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';
import { Repository } from 'typeorm';
import { CreateChickenDto } from './dto/create-chicken.dto';
import { UpdateChickenDto } from './dto/update-chicken.dto';
import { Chicken } from './entities/chicken.entity';
import { Farmyard } from './entities/farmyard.entity';

@Injectable()
export class ChickensService {
  constructor(
    @InjectRepository(Chicken)
    private readonly chickenRepository: Repository<Chicken>,
    @InjectRepository(Farmyard)
    private readonly farmyardRepository: Repository<Farmyard>,
  ) {}

  findAll(paginationQuery?: PaginationQueryDto) {
    if (paginationQuery) {
      const { limit, offset } = paginationQuery;
      return this.chickenRepository.find({
        relations: {
          farmyard: true,
        },
        skip: offset,
        take: limit,
      });
    }
    return this.chickenRepository.find({
      relations: {
        farmyard: true,
      },
    });
  }

  async findOne(id: string) {
    const chicken = await this.chickenRepository.findOne({
      where: { id: +id },
      relations: {
        farmyard: true,
      },
    });
    if (!chicken) {
      throw new NotFoundException(`Chicken with id #${id} not found`);
    }
    return chicken;
  }

  async create(createChickenDto: CreateChickenDto) {
    let chicken = null;
    if (createChickenDto.farmyard) {
      const farmyard = await this.preloadFarmyardByName(
        createChickenDto.farmyard.name,
      );

      chicken = this.chickenRepository.create({
        ...createChickenDto,
        farmyard,
      });
    } else {
      chicken = this.chickenRepository.create(createChickenDto);
    }
    return this.chickenRepository.save(chicken);
  }

  // TypeOrm: preload find and update if found
  async update(id: string, updateChickenDto: UpdateChickenDto) {
    let chicken = null;
    if (updateChickenDto.farmyard) {
      const farmyard = await this.preloadFarmyardByName(
        updateChickenDto.farmyard.name,
      );
      chicken = await this.chickenRepository.preload({
        id: +id,
        ...updateChickenDto,
        farmyard,
      });
    } else {
      chicken = await this.chickenRepository.preload({
        id: +id,
        ...updateChickenDto,
      });
    }
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

  private async preloadFarmyardByName(name: string): Promise<Farmyard> {
    const existingFarmyard = await this.farmyardRepository.findOne({
      where: { name: name },
    });
    if (existingFarmyard) {
      return existingFarmyard;
    }
    return this.farmyardRepository.create({ name: name });
  }

  // Procedural loop
  // https://www.darraghoriordan.com/2022/06/13/persistence-7-typeorm-postgres-9-tips-tricks-issues
  async run() {
    return await this.chickenRepository.increment(
      { isRunning: true },
      'steps',
      1,
    );
  }
}
