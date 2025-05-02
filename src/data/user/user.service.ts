import { Injectable } from "@nestjs/common";
import { BaseCrudService } from "@shared/base/base.service";
import { User } from "./user.entity";
import { UserRepository } from "@shared/repositories/user.repository";

@Injectable()
export class UserService extends BaseCrudService<User> {
  constructor(
    protected readonly repository: UserRepository
  ) {
    super(repository);
  }

  async findAll(): Promise<{ total: number; data: User[]; }> {
    console.log('service');
    const [data, total] = await this.repository.findAndCount();
    return { total, data };
    
  }
}