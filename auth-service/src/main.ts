import { NestFactory } from '@nestjs/core';
import { AppModule } from './v1/app.module';
import { Transport } from '@nestjs/microservices';
import { ResponseInterceptor } from './v1/common/configs/response.interceptor';
import { AllExceptionsFilter } from './v1/common/configs/error.filter';
import * as cookieParser from 'cookie-parser';
import { join } from 'path';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice({
    transport: Transport.RMQ,
    options: {
      urls: [process.env.QUEUE_URL],
      queue: 'auth_queue',
      queueOptions: { durable: true },
    },
  });

  app.connectMicroservice({
    transport: Transport.GRPC,
    options: {
      package: 'user',
      protoPath: join(__dirname, '/v1/common/connections/init.user.proto'),
    },
  });

  const PORT = process.env.PORT ?? 3000;

  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalFilters(new AllExceptionsFilter());
  app.use(cookieParser());
  
  app.startAllMicroservices()
  await app.listen(PORT,() => {
    console.log("Auth Server listening on port: " + PORT);
    console.log('Connecting to gRPC server on: ', `${process.env.HOST}:${process.env.PORT}`);
    console.log('Connecting to RMQ server at: ', process.env.QUEUE_URL);
  });
  
}
bootstrap();
