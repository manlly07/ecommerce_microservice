import { NestFactory } from '@nestjs/core';
import { AppModule } from './v1/apps/app.module';
import { Transport } from '@nestjs/microservices';
import * as dotenv from "dotenv"

dotenv.config()
async function bootstrap() {

  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.REDIS,
    options: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
    },
  });

  await app.listen();
}
bootstrap();
