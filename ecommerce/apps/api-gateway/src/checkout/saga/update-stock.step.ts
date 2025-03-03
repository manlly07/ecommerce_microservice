import { Step } from './step';
import { Inject, Injectable } from '@nestjs/common';
import { ClientRMQ } from '@nestjs/microservices';
import { lastValueFrom } from 'rxjs';
import { OrderDTO } from 'y/dtos';

@Injectable()
export class UpdateStockStep extends Step<OrderDTO, void> {
  constructor(
    @Inject('PRODUCTS_QUEUE') private _productsService: ClientRMQ, 
  ) {
    super();
    this.name = 'Update Stock Step';
  }

  async invoke(orders: OrderDTO): Promise<void> {
    console.log("INVOKE RPRODUCTS");
    const products = orders.shop_order_ids
    const stockUpdate = await lastValueFrom(
      this._productsService.send('product.stock.reduce', products
    ));
    console.log("AFTER INVOKE");
    console.log(stockUpdate);
    if (!stockUpdate.success) {
      throw new Error("Couldn't update stock");
    }
  }

  async withCompenstation(order: OrderDTO): Promise<void> {
    const stockUpdate = await lastValueFrom(
      this._productsService.send('product.stock.restock', {},
    ));
    if (!stockUpdate.success) {
      throw new Error("Couldn't update stock");
    }
  }
}