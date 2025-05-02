import { InjectDataSource } from "@nestjs/typeorm";
import { BaseEntity } from "@shared/base/base.entity";
import { DataSource, EntityTarget, Repository } from "typeorm";

export class BaseRepository<E extends BaseEntity> extends Repository<E> {
  constructor(
    protected entity: EntityTarget<E>,
    protected dataSource: DataSource,
  ) {
    super(entity, dataSource.createEntityManager());
  }
}