import { User } from "@data/user/user.entity";
import { BaseEntity } from "@shared/base/base.entity";
import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";

@Entity()
export class Product extends BaseEntity {
  @Column({ nullable: true })
  name: string;

  @Index('product_slug_idx', { unique: true })
  @Column({ nullable: false })
  slug: string;

  @Column({ default: 0 })
  amount: number;

  @Column({ type: 'bigint', default: 0 })
  price: number;

  @Column({ type: 'boolean', default: false })
  is_sold: boolean;

  @Column({ type: 'timestamp without time zone', nullable: true })
  sold_at: Date;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'buyer_id' })
  buyer: User;
  @Column({ nullable: true })
  buyer_id: number;

}