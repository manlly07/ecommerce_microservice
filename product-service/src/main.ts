import { NestFactory } from '@nestjs/core';
import { AppModule } from './v1/app.module';
import { InfoMiddleware } from './v1/common/middlewares/info.middleware';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice({
    transport: Transport.GRPC,
    options: {
      url: 'localhost:5001', 
      package: 'product',
      protoPath: join(__dirname, '/v1/connections/init.product.proto'),
    },
  });

  // app.use(InfoMiddleware)
  app.startAllMicroservices()

  const PORT = process.env.PORT ?? 3001;
  await app.listen(PORT, () => {
    console.log('Product Server listening on port: ' + PORT);
    console.log('Product GRPC Server listening on port: ' + 5001);
  });
}
bootstrap();