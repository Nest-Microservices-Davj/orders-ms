import { ArrayMinSize, IsArray, ValidateNested } from 'class-validator';
import { OrderItemDto } from './order-item.dto';
import { Type } from 'class-transformer';

export class CreateOrderDto {
  // This code was implemented before the order-item feature
  /* @IsNumber()
  @IsPositive()
  totalAmount: number;

  @IsNumber()
  @IsPositive()
  totalItems: number;

  @IsEnum(OrderStatusList, {
    message: `Possible status values are ${OrderStatusList}`,
  })
  @IsOptional()
  status: OrderStatus = OrderStatus.PENDING;

  @IsBoolean()
  @IsOptional()
  paid: boolean = false; */

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested()
  @Type(() => OrderItemDto)
  items: OrderItemDto[];
}
