import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";

export class BuyDto {
  @ApiProperty()
  userId: number;
  @ApiProperty()
  slug: string;
  @ApiProperty()
  @Transform(({ value }) => {
    const num = parseInt(value);
    return isNaN(num) || num < 0 || num > 1000000 ? 1 : num;
  })
  quantity: number;
  
}