import { NestFactory } from '@nestjs/core';
import { AppModule } from './v1/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const PORT = process.env.PORT ?? 3001;
  await app.listen(PORT, () => {
    console.log('Product Server listening on port: ' + PORT);
  });
}
bootstrap();
