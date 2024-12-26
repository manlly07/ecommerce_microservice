import { NestFactory } from '@nestjs/core';
import { AppModule } from './v1/app.module';
import { InfoMiddleware } from './v1/common/middlewares/info.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  await app.listen(process.env.PORT ?? 3002, () => {
    console.log(`Cart service is running on ${process.env.PORT ?? 3002}`);
  });
}
bootstrap();
