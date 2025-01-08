import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import * as dotenv from 'dotenv';
dotenv.config()
async function bootstrap() {
  const PORT = process.env.USERS_PORT || 3000;
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      port: PORT,
    }
  });
  
  await app.listen();
  console.log(`Users service is running on: ${PORT}`);
}
bootstrap();
