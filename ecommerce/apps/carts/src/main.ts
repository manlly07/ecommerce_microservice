import { NestFactory } from '@nestjs/core';
import { CartsModule } from './carts.module';

async function bootstrap() {
  const app = await NestFactory.create(CartsModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
