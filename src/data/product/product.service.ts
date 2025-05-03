import { BadRequestException, Injectable } from "@nestjs/common";
import { BaseCrudService } from "@shared/base/base.service";
import { Product } from "./product.entity";
import { ProductRepository } from "@shared/repositories/product.repository";
import { HistoryRepository } from "@shared/repositories/history.repository";
import { BuyDto } from "./product.dto";
import { UserRepository } from "@shared/repositories/user.repository";
import { Connection, DataSource, Transaction } from "typeorm";
import { User } from "@data/user/user.entity";
import { History } from "@data/history/history.entity";
import { HISTORY_TYPE } from "@shared/constants/database.enum";

@Injectable()
export class ProductService extends BaseCrudService<Product> {
  constructor(
    private productRepo: ProductRepository,
    private historyRepo: HistoryRepository,
    private userRepo: UserRepository,
    private dataSource: DataSource,
  ) {
    super(productRepo);
  }

  async buy(body: BuyDto) {
    return await this.dataSource.transaction(async (manager) => {
      const [user, product] = await Promise.all([
        this.userRepo.findOne({ where: { id: body.userId } }),
        this.productRepo.findOne({ where: { slug: body.slug, is_deleted: false, is_hidden: false } }),
      ]);

      if(!user || !product) {
        throw new BadRequestException('Sản phẩm không tồn tại.');
      }

      if (+product.amount < body.quantity) {
        throw new BadRequestException('Số lượng không đủ.');
      }

      const total = +product?.price * body.quantity;
      
      if (+user?.money < total) {
        throw new BadRequestException('Tiền không đủ.');
      }
      
      const newPrice = +user?.money - total;
      const newAmount = +product?.amount - body.quantity;

      await Promise.all([
        // update money user
        manager.update(User, { id: user.id }, { money: newPrice }),
        // update quantity product
        manager.update(Product, { id: product.id }, { amount: newAmount }),
        // create history

        manager.save(History, this.historyRepo.create({
          user_id: user.id,
          total: total,
          type: HISTORY_TYPE.BUY_ACCOUNT_BY_USER,
          message: `${user.username} đã mua ${body.quantity} tài khoản ${product.name} với tổng tiền ${total} VNĐ.`,
          information: `User: ${user.money} -> ${newPrice}, Amount: ${product?.amount} -> ${newAmount}`,
        }))
      ])
      
    })
  }

  async autoCreate() {
    try {
      const batchSize = 10000;
      const totalRecords = 10000000;

      for (let i = 0; i < totalRecords; i += batchSize) {
        const values: string[] = [];
      
        for (let j = 0; j < batchSize; j++) {
          const name = `'Product ${i + j + 4}'`;
          const slug = `${i + j + 4}`;
          const amount = 1000;
          const price = 1000;
          values.push(`(${name}, ${slug}, ${amount}, ${price})`);
        }
      
        const sql = `
          INSERT INTO product (name, slug, amount, price)
          VALUES ${values.join(',')};
        `;
      
        await this.dataSource.query(sql);
      }
      
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}