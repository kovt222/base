import { BaseEntity } from '@shared/base/base.entity';
import { User } from 'src/data/user/user.entity';
import { HISTORY_TYPE } from '@shared/constants/database.enum';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class History extends BaseEntity {
  @Column({ enum: HISTORY_TYPE })
  type: HISTORY_TYPE;

  @Column({ type: 'text' })
  message: string;

  @Column({ type: 'text', nullable: true })
  information: string;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'user_id' })
  user: User;
  @Column({ nullable: true })
  user_id: number;

  @Column({ nullable: true, type: 'bigint' })
  total: number;
}
