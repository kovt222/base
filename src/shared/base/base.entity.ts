import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export class BaseEntity {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  // @Column({ type: 'timestamp without time zone', default: () => 'CURRENT_TIMESTAMP' })
  @CreateDateColumn({ type: 'timestamp without time zone' })
  public created_at: Date;

  // @Column({ type: 'timestamp without time zone', default: () => 'CURRENT_TIMESTAMP' })
  @UpdateDateColumn({ type: 'timestamp without time zone' })
  public updated_at: Date;

  @Column({ default: false })
  public is_deleted: boolean;
  
  @Column({ default: false })
  public is_hidden: boolean;

}