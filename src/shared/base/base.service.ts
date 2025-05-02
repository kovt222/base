import { DeepPartial } from 'typeorm/common/DeepPartial';
import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';
import { BaseEntity } from './base.entity';
import { BaseRepository } from './base.repository';


export class BaseCrudService<E extends BaseEntity> {
  constructor(
    protected repository: BaseRepository<E>,
  ) {}

  async create(data: DeepPartial<E>): Promise<E> {
    const entity = this.repository.create(data);
    return await this.repository.save(entity);
  }

  async findAll(): Promise<{total: number, data:E[]}> {
    const [data, total] = await this.repository.findAndCount({
      where: {
        is_deleted: false as any,
        is_hidden: false as any,
      },
      order: {
        id: 'DESC' as any,
      },
    });

    return { total, data };
  }

  async getToManager(): Promise<{total: number, data:E[]}> {
    const [data, total] = await this.repository.findAndCount({
      where: {
        is_deleted: false as any,
      },
      order: {
        id: 'DESC' as any,
      },
    });
    return { total, data };
  }

  async findOne(id: any): Promise<E> {
    const entity = await this.repository.findOne({ where: { id, is_deleted: false as any } });
    if (!entity) {
      throw new NotFoundException(`Entity with ID ${id} not found.`);
    }
    return entity;
  }

  async update(id: number, data: DeepPartial<E>): Promise<E> {
    const entity = await this.findOne(id);
    const updatedEntity = { ...entity, ...data };
    return await this.repository.save(updatedEntity);
  }

  async delete(id: number): Promise<void> {
    const result = await this.repository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Entity with ID ${id} not found.`);
    }
  }
}
