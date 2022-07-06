import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { ChickensService } from './chickens.service';
import { CreateChickenDto } from './dto/create-chicken.dto';
import { UpdateChickenDto } from './dto/update-chicken.dto';

@Controller('chicken')
export class ChickensController {
  constructor(private readonly chickensService: ChickensService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;
    return this.chickensService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.chickensService.findOne(id);
  }

  @Post()
  create(@Body() createChickenDto: CreateChickenDto) {
    console.log('DTO', createChickenDto);
    return this.chickensService.create(createChickenDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateChickenDto: UpdateChickenDto) {
    return this.chickensService.update(id, updateChickenDto);
  }

  @Put(':id')
  updateAll(
    @Param('id') id: string,
    @Body() createChickenDto: CreateChickenDto,
  ) {
    return this.chickensService.update(id, createChickenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chickensService.remove(id);
  }

  @Post('run')
  run() {
    return this.chickensService.run();
  }
}
