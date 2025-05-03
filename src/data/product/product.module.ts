import { Module } from "@nestjs/common";
import { RepositoryModule } from "@shared/repositories/repository.module";
import { ProductService } from "./product.service";
import { ProductController } from "./product.controller";

@Module({
  imports: [
    RepositoryModule,
  ],
  providers: [ProductService],
  controllers: [ProductController],
  exports: [],
})
export class ProductModule {}