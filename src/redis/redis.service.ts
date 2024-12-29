import { Inject, Injectable } from '@nestjs/common';
import { RedisClientType } from 'redis';

@Injectable()
export class RedisService {
  @Inject('REDIS_CLIENT')
  private redisClient: RedisClientType;

  async getList(key: string) {
    return await this.redisClient.lRange(key, 0, -1);
  }

  async setList(key: string, list: Array<string>, ttl?: number) {
    list.forEach(async (item) => {
      await this.redisClient.lPush(key, item);
    });

    if (ttl) {
      await this.redisClient.expire(key, ttl);
    }
  }
}
