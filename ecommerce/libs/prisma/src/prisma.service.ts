import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient as ORDER } from './generated/order';
import { PrismaClient as AUTH } from './generated/auth';
import { PrismaClient as CART } from './generated/cart';

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  OrderClient = new ORDER();
  AuthClient = new AUTH({
    log: ['info'],
  });
  CartClient = new CART();

  async onModuleInit() {
    console.log('Connecting to Prisma Clients...');
    await this.OrderClient.$connect();
    await this.AuthClient.$connect();
    await this.CartClient.$connect();
  }

  async onModuleDestroy() {
    await this.OrderClient.$disconnect();
    await this.AuthClient.$disconnect();
    await this.CartClient.$disconnect();
  }
}
