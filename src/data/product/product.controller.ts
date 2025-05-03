import { BadRequestException, Body, Controller, Get, Post } from "@nestjs/common";
import { BaseCrudController } from "@shared/base/base.controller";
import { ProductService } from "./product.service";
import { Product } from "./product.entity";
import { BuyDto } from "./product.dto";

@Controller('product')
export class ProductController extends BaseCrudController<Product, ProductService>{
  constructor(service: ProductService) {
    super(service);
  }

  @Post('buy')
  async buy(@Body() body: BuyDto) {
    try {
      return await this.service.buy(body);
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  @Get('auto-create')
  async autoCreate() {
    return this.service.autoCreate();
  }
}