import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserRepository } from 'src/v1/repositories/user.repository';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { KeysModule } from '../keys/keys.module';
import { UserRoleModule } from '../user-role/user-role.module';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'NOTIFICATION_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [process.env.QUEUE_URL],
          queue: 'auth_queue',
          queueOptions: { durable: true },
        },
      },
    ]),

    ClientsModule.register([
      {
        name: 'REDIS_SERVICE', // Tên định danh của service
        transport: Transport.REDIS,
        options: {
          host: String(process.env.REDIS_HOST), 
          port: parseInt(process.env.REDIS_PORT),
        },
      },
    ]),

    KeysModule,
    UserRoleModule
  ],
  providers: [UsersService, UserRepository],
  controllers: [UsersController],
})
export class UsersModule {}
