import { Module } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "@data/user/user.entity";
import { History } from "@data/history/history.entity";

const REPOSITORIES = [
  UserRepository,
];

const ENTITIES = [
  User,
  History,
]

@Module({
  imports: [
    TypeOrmModule.forFeature([...REPOSITORIES]),
  ],
  providers: [...REPOSITORIES],
  exports: [TypeOrmModule, ...REPOSITORIES],
})
export class RepositoryModule {}