import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';
import { Transport } from '@nestjs/microservices';
dotenv.config();
async function bootstrap() {
  const PORT = process.env.GATEWAY_PORT || 8080;
  const app = await NestFactory.create(ApiGatewayModule);

  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [process.env.QUEUE_URL],
      queue: 'auth_queue',
      queueOptions: { durable: true },
    },
  });

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.startAllMicroservices();

  await app.listen(PORT);
  
  console.log(`Api Gateway is running on: ${PORT}`);
}
bootstrap();
