import { Controller, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { OrderDTO } from 'y/dtos';

@Controller()
export class OrdersController {
  constructor(private readonly _orderService: OrdersService) {}

  @MessagePattern('order.pending')
  async createOrder(@Payload() data: OrderDTO) {
    const res = await this._orderService.createOrder(data);
    return res;
  }

  @MessagePattern('order.cancel')
  async cancelOrder(@Payload() data: OrderDTO) {
    return await this._orderService.cancelOrder(data);
  }

  @MessagePattern('order.created')
  async createdOrder(@Payload() data: OrderDTO) {
    return await this._orderService.createdOrder(data);
  }
}
