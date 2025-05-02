import { Controller, Get } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { User } from "./user.entity";
import { BaseCrudController } from "@shared/base/base.controller";
import { UserService } from "./user.service";

@ApiTags('user')
@Controller('user')
export class UserController extends BaseCrudController<User, UserService> {
  constructor(service: UserService) {
    super(service);
  }

  @Get('get-all')
  async findAll(): Promise<{ total: number; data: User[]; }> {
    return super.findAll();
  }
}