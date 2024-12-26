import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CartsController } from './carts.controller';
import { CartsService } from './carts.service';
import { CartsRepository } from 'src/v1/repositories/cart.repository';
import { CartItemRepository } from 'src/v1/repositories/cart.item.repository';
import { ProductClientService } from 'src/v1/common/connections/init.grpc.product';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'REDIS_SERVICE',
        transport: Transport.REDIS,
        options: {
          host: String(process.env.REDIS_HOST), 
          port: parseInt(process.env.REDIS_PORT),
        },
      },
    ]),

  ],
  controllers: [CartsController],
  providers: [CartsService, CartsRepository, CartItemRepository, ProductClientService],
  exports: [],
})
export class CartsModule {}
