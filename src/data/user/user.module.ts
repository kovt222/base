import { Module } from "@nestjs/common";
import { RepositoryModule } from "@shared/repositories/repository.module";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";

@Module({
  imports: [
    RepositoryModule,
  ],
  providers: [UserService],
  controllers: [UserController],
  exports: [],
})
export class UserModule {}