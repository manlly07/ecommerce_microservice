import { Body, Controller, Param, Post, Req } from '@nestjs/common';
import { CartsService } from './carts.service';
import { Request } from 'express';

@Controller('carts')
export class CartsController {
    constructor(
        private readonly _cartsService: CartsService,
    ) {}

    // Add a new cart
    @Post()
    async addToCart(@Body() dto: {product_id: string, quantity: number, product_shop: string}, @Req() request: Request) {
        const { user_id } = request.body;
        return await this._cartsService.addToCart(user_id, dto.product_id, dto.quantity, dto.product_shop);
    }
    // Get cart by userid
}