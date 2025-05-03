import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { BaseRepository } from "@shared/base/base.repository";
import { Product } from "@data/product/product.entity";

@Injectable()
export class ProductRepository extends BaseRepository<Product> {
  constructor(dataSource: DataSource) {
    super(Product, dataSource);
  }
}