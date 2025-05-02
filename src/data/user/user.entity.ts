import { BaseEntity } from '@shared/base/base.entity';
import { USER_ROLE } from '@shared/constants/database.enum';
import { generateRandomInviteCode } from '@shared/utils/generate-random-string.util';
import { Entity, Column, Index, ManyToOne, BeforeInsert, JoinColumn } from 'typeorm';


@Entity()
export class User extends BaseEntity {

  @Index('IDX_username', { unique: true })
  @Column({ unique: true })
  username: string;

  @Column({ nullable: true, default: 'user' })
  fullname: string;

  @Column({ nullable: true })
  email: string;

  @Column({ type: 'boolean', default: false })
  email_confirmed: boolean;

  @Column({ select: false })
  password: string;

  @Column({ enum: USER_ROLE, default: USER_ROLE.USER })
  role: USER_ROLE;

  @Column({ nullable: true, default: 0, type: 'bigint' })
  money: number;

  @Column({ nullable: true })
  phone: string;

  @Index('IDX_invite_code', { unique: true })
  @Column({ unique: true })
  invite_code: String;

  @ManyToOne(() => User, { nullable: true })
  @JoinColumn({ name: 'parent_id'})
  parent: User;
  @Column({ nullable: true })
  parent_id: number;

  @BeforeInsert()
  async assignInviteCode() {
    const inviteCode = await this.generateUniqueInviteCode();
    this.invite_code = inviteCode;
  }

  private async generateUniqueInviteCode(): Promise<string> {
    const repo = this.getRepository();
    let inviteCode: string;
    let existInviteCode: boolean;

    do {
      inviteCode = generateRandomInviteCode(6);
      existInviteCode = await repo.findOne({ where: { invite_code: inviteCode } }) !== null;
    } while (existInviteCode);

    return inviteCode;
  }

  private getRepository() {
    const dataSource = require('typeorm').dataSource;
    return dataSource.getRepository(User);
  }

}