import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { InfoMiddleware } from './common/middlewares/info.middleware';
import { CartsModule } from './apps/carts/carts.module';

@Module({
  imports: [
    // Import các module khác
    CartsModule,
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