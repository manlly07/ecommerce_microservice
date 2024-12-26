import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseProvider } from './connections/init.mongodb';
import { SpusModule } from './apps/spus/spus.module';
import { SkusModule } from './apps/skus/skus.module';
import { InfoMiddleware } from './common/middlewares/info.middleware';

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
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(InfoMiddleware) // Áp dụng middleware
      .forRoutes('*');       // Áp dụng cho tất cả các route
  }
}
