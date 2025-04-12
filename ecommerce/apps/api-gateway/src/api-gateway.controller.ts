import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiGatewayService } from './api-gateway.service';

@Controller('settings')
export class ApiGatewayController {
  constructor(private readonly apiGatewayService: ApiGatewayService) {}

  @Get('payment')
  async getPayments() {
    return await this.apiGatewayService.getAllPayments();
  }

  @Get('payment/:id')
  async getPaymentById(@Param('id') id: string) {
    return await this.apiGatewayService.getPaymentById(id);
  }
  @Post('payment')
  async createPayment(@Body() data: any) {
    return await this.apiGatewayService.createPayment(data);
  }

  @Post('payment/setup')
  async setupPayment() {
    return await this.apiGatewayService.setupPayment();
  }
}
