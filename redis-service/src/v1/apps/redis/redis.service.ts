import { InjectRedis } from '@nestjs-modules/ioredis';
import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService {
  constructor(@InjectRedis() private readonly _redis: Redis) {}

  async set(key: string, value: any, ttl?: number): Promise<void> {
    const data = JSON.stringify(value);
    if (ttl) {
      
      console.log("Set time ttl: ", ttl);
      await this._redis.set(key, data, 'EX', ttl); // EX là expiry
    } else {
      await this._redis.set(key, data);
    }
  }

  // Lấy giá trị từ Redis
  async get<T>(key: string): Promise<T | null> {
    const value = await this._redis.get(key);
    return value ? JSON.parse(value) : null;
  }

  // Xóa key khỏi Redis
  async delete(key: string): Promise<number> {
    return await this._redis.del(key);
  }

  // Đặt thời gian hết hạn cho key
  async expire(key: string, ttl: number): Promise<void> {
    await this._redis.expire(key, ttl);
  }

  // Xóa toàn bộ dữ liệu Redis (chỉ sử dụng trong development hoặc test)
  async flushAll(): Promise<void> {
    await this._redis.flushall();
  }

  // Kiểm tra key có tồn tại không
  async exists(key: string): Promise<boolean> {
    const result = await this._redis.exists(key);
    return result === 1;
  }
}
