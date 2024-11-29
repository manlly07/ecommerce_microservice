import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseProvider } from './connections/init.mongodb';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { SpusModule } from './apps/spus/spus.module';
import { SkusModule } from './apps/skus/skus.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
      envFilePath: '.env', 
    }),

    // ClientsModule.register([
    //   {
    //     name: 'USER_SERVICE',
    //     transport: Transport.GRPC,
    //     options: {
    //       package: 'user',
    //       protoPath: './src/v1/connections/init.user.proto',
    //       url: `${process.env.HOST}:${process.env.PORT}`,
    //     },
    //   },
    // ]),

    DatabaseProvider,
    SpusModule,
    SkusModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
