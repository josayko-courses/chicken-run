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
} from '@nestjs/common';

@Controller('chickens')
export class ChickensController {
  @Get()
  findAll() {
    return 'returns all the chickens';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `returns chicken #${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `updates chicken with PATCH #${id}`;
  }
  @Put(':id')
  updateAll(@Param('id') id: string, @Body() body) {
    return `updates chicken with PUT #${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `removes chicken #${id}`;
  }
}
