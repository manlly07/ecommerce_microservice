import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import {
  CartCreateDTO,
  CartDTO,
  ShopOrderDTO,
  UpdateCartDTO,
  UpdateCartItemDTO,
} from 'y/dtos';
import { CartItemRepository } from 'y/repositories/cart.item.repository';
import { CartsRepository } from 'y/repositories/carts.repository';

@Injectable()
export class CartsService {
  constructor(
    protected readonly _cartsRepository: CartsRepository,
    protected readonly _cartItemRepository: CartItemRepository,
  ) {}
  async createCart(user_id: string) {
    const cart = await this._cartsRepository.create({ user_id });
    return { ...cart, cart_items: [] };
  }

  async getCartByUser(user_id: string) {
    console.log(user_id);
    let cart = (await this._cartsRepository.findOne({
      where: { user_id },
      include: {
        cart_items: {
          // Chắc chắn rằng Prisma nhận diện quan hệ
          where: { isDeleted: false },
          select: {
            product_shop: true,
            product_id: true,
            quantity: true,
          },
        },
      },
    })) as {
      id: string;
      user_id: string;
      created_at: Date;
      updated_at: Date;
      cart_items: any[];
    } | null;
    if (!cart) {
      cart = await this.createCart(user_id);
    }

    const shopOrdersMap = new Map<string, ShopOrderDTO>();

    for (const item of cart.cart_items) {
      const product_shop = item.product_shop;
      if (!shopOrdersMap.has(product_shop)) {
        shopOrdersMap.set(product_shop, {
          shop_id: product_shop,
          shop_discount: [], // Bạn cần fetch dữ liệu giảm giá nếu có
          item_products: [],
          version: '1.0', // Giả sử có version mặc định
        });
      }

      shopOrdersMap.get(product_shop).item_products.push({
        quantity: item.quantity,
        price: item.price,
        shop_id: item.product_shop,
        product_id: item.product_id,
      });
    }

    const response: CartDTO = {
      cart_id: cart.id,
      user_id: user_id,
      shop_order_ids: Array.from(shopOrdersMap.values()),
    };

    return response;
  }

  async updateCart(data: UpdateCartDTO) {
    const { user_id, cart_id, action_type, product_id, quantity } = data;
    const cart = await this.getCartByUser(user_id);
    if (!cart)
      throw new RpcException({
        code: '404',
        message: 'Cart not found!',
      });
    if (cart.cart_id !== cart_id) throw new RpcException('Cart not match!');

    switch (action_type) {
      case 0: // Cập nhật số lượng
        await this.updateQuantities(cart_id, product_id, quantity);
        cart.shop_order_ids = cart.shop_order_ids.map((shopOrder) => {
          shopOrder.item_products = shopOrder.item_products.map((item) => {
            if (item.product_id === product_id) {
              item.quantity = quantity;
            }
            return item;
          });
          return shopOrder;
        });
        break;

      case 1: // Xóa sản phẩm khỏi giỏ hàng
        this.removeItem(cart_id, product_id);
        cart.shop_order_ids = cart.shop_order_ids.map((shopOrder) => {
          shopOrder.item_products = shopOrder.item_products.filter(
            (item) => item.product_id !== product_id,
          );
          return shopOrder;
        });
        break;

      default:
        throw new RpcException('Invalid action type!');
    }

    return cart;
  }
  async removeItem(cart_id: string, product_id: string) {
    const cartItem = await this._cartItemRepository.findByKey(
      cart_id,
      product_id,
    );
    if (!cartItem)
      throw new RpcException(`Item with ID ${product_id} not found!`);

    const state = await this._cartItemRepository.updateItem(
      { product_id_cart_id: { cart_id, product_id } },
      { isDeleted: true },
    );

    if (!state)
      throw new RpcException(`Failed to delete product ID ${product_id}`);
    return state;
  }
  async updateQuantities(
    cart_id: string,
    product_id: string,
    quantity: number,
  ) {
    // Xóa nếu số lượng = 0
    if (quantity <= 0) {
      return this.removeItem(cart_id, product_id);
    }
    // Kiểm tra xem sản phẩm có tồn tại không
    const cartItem = await this._cartItemRepository.findByKey(
      cart_id,
      product_id,
    );
    if (!cartItem)
      throw new RpcException(`Item with ID ${product_id} not found!`);

    // Cập nhật số lượng
    const state = await this._cartItemRepository.updateItem(
      { product_id_cart_id: { cart_id, product_id } },
      { quantity },
    );

    if (!state)
      throw new RpcException(
        `Failed to update quantity for product ID ${product_id}`,
      );
    return state;
  }
  async addToCart(data: CartCreateDTO) {
    const { user_id, product_id, quantity, product_shop } = data;
    // Lấy giỏ hàng của user
    const cart = await this.getCartByUser(user_id);
    console.log(cart);
    const cartItems = await this._cartItemRepository.findByKey(
      cart.cart_id,
      product_id,
    );
    if (!cartItems) {
      // Tạo mới cart item
      return await this._cartItemRepository.create({
        cart_id: cart.cart_id,
        product_id,
        quantity,
        product_shop,
        isDeleted: false,
      });
    }

    if (cartItems.isDeleted) {
      return await this._cartItemRepository.updateItem(
        {
          product_id_cart_id: {
            cart_id: cart.cart_id,
            product_id,
          },
        },
        {
          quantity,
          isDeleted: false,
        },
      );
    }

    return await this._cartItemRepository.updateItem(
      {
        product_id_cart_id: {
          cart_id: cart.cart_id,
          product_id,
        },
      },
      {
        quantity: cartItems.quantity + quantity,
      },
    );
  }
}
