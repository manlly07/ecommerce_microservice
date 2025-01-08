import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { CartsRepository } from 'src/v1/repositories/cart.repository';
import { CartItemRepository } from 'src/v1/repositories/cart.item.repository';
import { ProductClientService } from 'src/v1/common/connections/init.grpc.product';

@Injectable()
export class CartsService {
  constructor(
    private readonly _cartsRepository: CartsRepository,
    private readonly _cartItemRepository: CartItemRepository,
    private readonly _productClientService: ProductClientService,

    @Inject('REDIS_SERVICE') private _redisClient: ClientProxy,
  ) {}

  private getCartKey(userId: string): string {
    return `cart:${userId}`;
  }

  async getCartByUser(userId: string) {
    // const cartKey = this.getCartKey(userId);

    // Kiểm tra Redis trước
    // const cachedCart = await firstValueFrom(
    //     this._redisClient.send('get', cartKey)
    // );
    // if (cachedCart) {
    //     return JSON.parse(cachedCart);
    // }

    // Nếu không có trong Redis, lấy từ MySQL
    let cart = await this._cartsRepository.findByUserId(userId);

    if(!cart) {
        // Nếu không có trong MySQL, tạo mới
        cart = await this.createCart(userId);
        return cart;
    }
    // Lưu lại Redis để sử dụng trong tương lai
    // this._redisClient.emit('set', {
    //     key: cartKey,
    //     value: JSON.stringify(cart),
    //     ttl: 3600,
    // });

    return cart;
  }

  async createCart(user_id: string) {
    return await this._cartsRepository.create({ user_id });
  }

  async addToCart(user_id: string, product_id: string, quantity: number, product_shop: string) {
    // Kiểm tra user_id có không
    if(!user_id || !product_id || !quantity) throw new BadRequestException("Something went wrong!");

    // Kiểm tra sản phầm có tồn tại không
    const product = await this._productClientService.isProductExists(product_id);
    if(!product) throw new NotFoundException("Product not found!");

    // Lấy giỏ hàng của user
    const cart = await this.getCartByUser(user_id);
    const cartItems = await this._cartItemRepository.findByKey(cart.id, product_id)

    if(!cartItems) {
        // Tạo mới cart item
        return await this._cartItemRepository.create({ cart_id: cart.id, product_id, quantity, product_shop});
    }
    
    // Update cart item
    return await this._cartItemRepository.update({
      where: {
        product_id_cart_id: {
          cart_id: cart.id,
          product_id
        }
      },
      data: {
        quantity: cartItems.quantity + quantity
      }
    });
  }

  async updateCartItem({ user_id, cart_id, action_type, updated_shop_order_ids }) {
    const cart = await this.getCartByUser(user_id);
    
    if(!cart) throw new NotFoundException("Cart not found!");
    if(cart.id !== cart_id) throw new BadRequestException("Cart not match!");

    // type == 0: update quantity
    // type == 1: remove item
    // type == 2: update is_checkout and auto apply promotion

    if(action_type === 0) {
      for(let item of updated_shop_order_ids) {
        await this.updateQuantityCart(item.product_id, cart.id, item.quantity);
      }
    }

    if(action_type == 1) {
      for(let item of updated_shop_order_ids) {
        await this.deleteItemCart(item.product_id, cart.id);
      }
    }

    return true;
  }

  async updateQuantityCart (product_id: string, cart_id: string, quantity: number) {
    if(quantity < 0) quantity = 0;
    if(quantity === 0) return await this.deleteItemCart(product_id, cart_id);

    const cartItems = await this._cartItemRepository.findByKey(cart_id, product_id);
    if(!cartItems) throw new NotFoundException("Item not found!");

    const state = await this._cartItemRepository.update({
      where: {
        cart_id,
        product_id
      },
      data: {
        quantity
      }
    });

    if(!state) throw new BadRequestException("Update failed!");

    return true;
  }

  async deleteItemCart (product_id: string, cart_id: string) {
    const cartItems = await this._cartItemRepository.findByKey(cart_id, product_id);
    if(!cartItems) throw new NotFoundException("Item not found!");

    const state = await this._cartItemRepository.softDelete({
      where: {
        cart_id,
        product_id
      },
      data: {
        isDeleted: true
      }
    });

    if(!state) throw new BadRequestException("Delete failed!");
  }

  // async addItemToCart( userId: string, productId: string, quantity: number, price: number ) {
  //   const cartKey = this.getCartKey(userId);

  //   // Lấy giỏ hàng từ Redis
  //   let cart = await this.getCartByUser(userId);
  //   if (!cart) {
  //     cart = { userId, items: [], totalPrice: 0 };
  //   }

  //   const itemIndex = cart.items.findIndex(
  //     (item: { productId: string; }) => item.productId === productId,
  //   );
  //   if (itemIndex > -1) {
  //     cart.items[itemIndex].quantity += quantity;
  //     cart.items[itemIndex].price = price;
  //   } else {
  //     cart.items.push({ productId, quantity, price });
  //   }

  //   cart.totalPrice = cart.items.reduce(
  //     (sum, item) => sum + item.price * item.quantity,
  //     0,
  //   );

  //   // Cập nhật Redis
  //   this._redisClient.emit('set', {
  //       key: cartKey,
  //       value: JSON.stringify(cart),
  //       ttl: 3600,
  //   });

  //   return cart;
  // }

  // async removeItemFromCart(userId: string, productId: string) {
  //   const cartKey = this.getCartKey(userId);

  //   let cart = await this.getCartByUser(userId);
  //   if (!cart) {
  //     return null;
  //   }

  //   cart.items = cart.items.filter((item) => item.productId !== productId);

  //   cart.totalPrice = cart.items.reduce(
  //     (sum, item) => sum + item.price * item.quantity,
  //     0,
  //   );

  //   // Cập nhật Redis
  //   this._redisClient.emit('set', {
  //       key: cartKey,
  //       value: JSON.stringify(cart),
  //       ttl: 3600,
  //   });

  //   return cart;
  // }
}