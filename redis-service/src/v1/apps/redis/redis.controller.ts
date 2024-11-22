import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { RedisService } from './redis.service';

@Controller('redis')

export class RedisController {
    constructor(
        private readonly _redisService: RedisService,
    ) {}

    @MessagePattern('get')
    async get(data: any) {
        return await this._redisService.get(data.key);
    }

    @MessagePattern('set')
    async set(data: any) {
        return await this._redisService.set(data.key, data.value, data?.ttl);
    }

    @MessagePattern('delete')
    async del(data: any) {
        return await this._redisService.delete(data.key);
    }

    @MessagePattern('expire')
    async keys(data: any) {
        return await this._redisService.expire(data.key, data.ttl);
    }

    @MessagePattern('clear')
    async clear() {
        return await this._redisService.flushAll();
    }

    @MessagePattern('exists')
    async exists(data: any) {
        return await this._redisService.exists(data.key);
    }

}
