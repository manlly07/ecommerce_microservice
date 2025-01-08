import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient as PRODUCT } from './generated/product';
import { PrismaClient as AUTH } from './generated/auth';
import { PrismaClient as CART } from './generated/cart';

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  ProductClient = new PRODUCT();
  AuthClient = new AUTH();
  CartClient = new CART();

  async onModuleInit() {
    await this.ProductClient.$connect();
    await this.AuthClient.$connect();
    await this.CartClient.$connect();
  }

  async onModuleDestroy() {
    await this.ProductClient.$disconnect();
    await this.AuthClient.$disconnect();
    await this.CartClient.$disconnect();
  }
}
