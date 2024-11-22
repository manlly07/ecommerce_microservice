import { Module } from '@nestjs/common';
import { RedisController } from './redis.controller';
import { RedisModule as RedisIoModule } from '@nestjs-modules/ioredis';
import { RedisService } from './redis.service';
import * as dotenv from "dotenv";
dotenv.config();

@Module({
  imports: [
    RedisIoModule.forRoot({
      type: 'single',
      url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`,
    }),
  ],
  controllers: [RedisController],
  providers: [RedisService]
})
export class RedisModule {}
