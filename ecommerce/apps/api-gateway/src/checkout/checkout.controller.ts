import { Body, Controller, Post, Req } from '@nestjs/common';
import { CheckoutService } from './checkout.service';
import { UserAddress } from 'y/dtos';

@Controller('checkout')
export class CheckoutController {
  constructor(private readonly _checkoutService: CheckoutService) {}
  @Post('')
  async checkout(
    @Body()
    dto: {
      cart_id: string;
      shop_order_ids: [];
      user_address: UserAddress;
      user_payment: { id: string; method_name: string };
    },
    @Req() req: Request,
  ) {
    const user_id = req.headers['x-client-id'] as string;
    return await this._checkoutService.checkout({ ...dto, user_id });
  }

  @Post('review')
  async checkoutReview(
    @Body() dto: { cart_id: string; shop_order_ids: [] },
    @Req() req: Request,
  ) {
    const user_id = req.headers['x-client-id'] as string;
    return await this._checkoutService.checkoutReview({ ...dto, user_id });
  }
}
