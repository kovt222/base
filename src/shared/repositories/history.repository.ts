
import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { BaseRepository } from "@shared/base/base.repository";
import { History } from "@data/history/history.entity"

@Injectable()
export class HistoryRepository extends BaseRepository<History> {
  constructor(dataSource: DataSource) {
    super(History, dataSource);
  }
}