import { IsOptional, IsBooleanString, IsNumberString } from 'class-validator';
import { Transform } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class PaginationFilterDto {
  @ApiPropertyOptional({ enum: { true: 'true', false: 'false' }})
  @IsOptional()
  is_hidden?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  @Transform(({ value }) => {
    const num = parseInt(value);
    return isNaN(num) || num < 0 || num > 1000000 ? 10 : num;
  })
  limit?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumberString()
  @Transform(({ value }) => {
    const num = parseInt(value);
    return isNaN(num) || num < 0 || num > 1000000 ? 0 : num;
  })
  offset?: number;
}

export class GenericFilterDto extends PaginationFilterDto {
  [key: string]: any;
}