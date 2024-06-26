import { OrderStatus } from '@prisma/client';

export interface OrdersWithProducts {
  OrderItem: {
    name: any;
    productId: number;
    quantity: number;
    price: number;
  }[];
  id: string;
  totalAmount: number;
  totalItems: number;
  status: OrderStatus;
  stripeChargeId: string;
  paid: boolean;
  paidAt: Date;
  createdAt: Date;
  updatedAt: Date;
}
