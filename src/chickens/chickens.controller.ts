import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Patch,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { ChickensService } from './chickens.service';

@Controller('chickens')
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
  @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    return this.chickensService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return this.chickensService.update(id, body);
  }
  @Put(':id')
  updateAll(@Param('id') id: string, @Body() body) {
    return this.chickensService.updateAll(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.chickensService.remove(id);
  }
}
