import { Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { BaseCrudService } from './base.service';
import { DeepPartial } from 'typeorm';
import { BaseEntity } from './base.entity';
import { ApiBearerAuth } from '@nestjs/swagger';


export class BaseCrudController<E extends BaseEntity, X extends BaseCrudService<E>> {
  constructor(protected service: X) {}

  @ApiBearerAuth()
  @Post('create')
  async create(@Body() data: DeepPartial<E>) {
    return this.service.create(data);
  }

  @Get('get-all')
  async findAll() {
    return this.service.findAll();
  }
  @Get('get-to-manager')
  async getToManager() {
    return this.service.getToManager();
  }

  @Get('get-one/:id')
  async findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @ApiBearerAuth()
  @Put('update/:id')
  async update(@Param('id') id: string, @Body() data: DeepPartial<E>) {
    return this.service.update(+id, data);
  }

  @ApiBearerAuth()
  @Delete('delete/:id')
  async delete(@Param('id') id: string) {
    return this.service.delete(+id);
  }
}
