import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';
import { CartCreateDTO, UpdateCartDTO } from 'y/dtos';

@Injectable()
export class CartsService {
  constructor(
    @Inject('CARTS_SERVICE') private readonly _cartClient: ClientProxy,
    @Inject('PRODUCTS_SERVICE') private readonly _productClient: ClientProxy,
  ) {}

  async addToCart(data: CartCreateDTO) {
    const { product_id } = data;

    const product = await firstValueFrom(
      this._productClient.send('product.getSkuById', product_id)
    );

    console.log(product);

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    return await firstValueFrom(this._cartClient.send('cart.add', data));
  }
  async getCartByUser(user_id: string) {
    return await firstValueFrom(
      this._cartClient.send('cart.get', user_id)
    );
  }
  async update(updateCartDto: UpdateCartDTO) {
    return await firstValueFrom(this._cartClient.send('cart.update', updateCartDto));
  }
}
