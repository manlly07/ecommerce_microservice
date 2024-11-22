import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseProvider } from './connections/init.mongodb';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
      envFilePath: '.env', 
    }),

    DatabaseProvider,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
