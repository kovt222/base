import { Module } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductRepository } from "./product.repository";
import { HistoryRepository } from "./history.repository";

const REPOSITORIES = [
  UserRepository,
  ProductRepository,
  HistoryRepository,
];

@Module({
  imports: [
    TypeOrmModule.forFeature([...REPOSITORIES]),
  ],
  providers: [...REPOSITORIES],
  exports: [TypeOrmModule, ...REPOSITORIES],
})
export class RepositoryModule {}