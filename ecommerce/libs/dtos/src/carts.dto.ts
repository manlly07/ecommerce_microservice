import { IsString, IsNumber, Min, IsNotEmpty, IsOptional } from 'class-validator';

export class CartCreateDTO {
  @IsOptional()
  @IsString()
  user_id: string;

  @IsNotEmpty()
  @IsString()
  product_id: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  quantity: number;

  @IsNotEmpty()
  @IsString()
  product_shop: string;
}

export interface ItemProductDTO {
  quantity: number;
  price: number;
  shop_id: string;
  product_id: string;
}

export interface ShopDiscountDTO {
  discount_id: string;
  shop_id: number;
  code: string;
}

export interface ShopOrderDTO {
  shop_id: string;
  shop_discount?: ShopDiscountDTO[];
  item_products: ItemProductDTO[];
  version?: string;
}

export interface CartDTO {
  cart_id: string;
  user_id: string;
  shop_order_ids: ShopOrderDTO[];
}
