import { IsEnum, IsOptional } from 'class-validator';
import { PaginationDto } from 'src/common/dto';
import { OrderStatusList } from '../enum/order.enum';
import { OrderStatus } from '@prisma/client';

export class OrderPaginationDto extends PaginationDto {
  @IsEnum(OrderStatusList, {
    message: `Possible status values are ${OrderStatusList}`,
  })
  @IsOptional()
  status?: OrderStatus;
}
