import { NestFactory } from '@nestjs/core';
import { AppModule } from './v1/app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [process.env.QUEUE_URL], //amqp://localhost:5672'
      queue: 'auth_queue',
      queueOptions: { durable: true },
    },
  });

  await app.listen();
}
bootstrap();
