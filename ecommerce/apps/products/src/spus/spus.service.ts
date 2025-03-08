import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { SkusService } from '../skus/skus.service';
import { SpuDTO, SpuQueryDTO } from 'y/dtos';
import { SpuRepository } from 'y/repositories/spu.repository';
import { InjectRedis } from '@nestjs-modules/ioredis';
import Redis from 'ioredis';
import { RpcException } from '@nestjs/microservices';
import { error } from 'console';
// import { ClientRedis } from '@nestjs/microservices';

@Injectable()
export class SpusService {
  constructor(
    private _spusRepository: SpuRepository,
    private _skuService: SkusService,
    @InjectRedis() private readonly _redisService: Redis,
  ) {}

  async findAll(dto: SpuQueryDTO) {
    const filter: any = {};
    console.log(dto);
    if (dto.category) {
      filter.product_category = dto.category;
    }

    if (dto.shop) {
      filter.product_shop = dto.shop;
    }

    if (dto.minPrice) {
      filter.product_price = { $gte: dto.minPrice };
    }

    if (dto.maxPrice) {
      filter.product_price = { ...filter.product_price, $lte: dto.maxPrice };
    }

    if (dto.rate) {
      filter.product_rate = dto.rate;
    }

    filter.isPublished = true;

    const { page = 1, perPage = 20 } = dto;
    return await this._spusRepository.findAll({ filter, page, perPage });
  }

  async create(dto: SpuDTO) {
    const newSpu = await this._spusRepository.create(dto);
    console.log(newSpu);
    if (newSpu && dto.sku_list.length > 0) {
      const convertSkuList = dto.sku_list.map((sku) => {
        return {
          ...sku,
          product_id: newSpu.product_id,
          sku_id: randomUUID(),
        };
      });

      await this._skuService.createMany(convertSkuList);
    }

    return newSpu;
  }

  async findByIds(
    products: { quantity: number; product_id: string; shop_id: string }[],
  ) {
    console.log(products);
    return await Promise.all(
      products.map(async (product) => {
        const foundProduct = await this.getSkuById(product.product_id);
        if (foundProduct) {
          return {
            price: foundProduct.sku_price,
            quantity: product.quantity,
            product_id: product.product_id,
          };
        }
      }),
    );
  }

    // async getSpuById(spu_id: string) {
    //   const spu = await this._spusRepository.aggregate([
    //     {
    //       $match: {
    //         product_id: spu_id,
    //       },
    //     },
    //     {
    //       $lookup: {
    //         from: 'Skus',
    //         localField: 'product_id',
    //         foreignField: 'product_id',
    //         as: 'sku_list',
    //       },
    //     },
    //     {
    //       $project: {
    //         isDraft: 0,
    //         isPublished: 0,
    //         isDeleted: 0,
    //         __v: 0,
    //         createdAt: 0,
    //         updatedAt: 0,
    //         'sku.isDraft': 0,
    //         'sku.isPublished': 0,
    //         'sku.isDeleted': 0,
    //         'sku.__v': 0,
    //         'sku.createdAt': 0,
    //         'sku.updatedAt': 0,
    //         'sku_list.isDraft': 0,
    //         'sku_list.isPublished': 0,
    //         'sku_list.isDeleted': 0,
    //         'sku_list.__v': 0,
    //       },
    //     },
    //   ]);
    //   console.log('FROM DB::', new Date().getTime());
    //   return spu;
    // }

  async getSpuById(spu_id: string) {
    const keys = 'PRO_TICKET:ITEM:' + spu_id;
    // 1. Get data from cache
    const result = await this._redisService.get(keys);
    // 2. YES -> Hit cache
    if (result) {
      console.log('FROM CACHE::', new Date().getTime());
      return JSON.parse(result);
    }

    // const locker = this._redisService.setnx()
    // 3. NO -> Miss cache
    // 4. Get data from DB
    const spu = await this._spusRepository.aggregate([
      {
        $match: {
          product_id: spu_id,
        },
      },
      {
        $lookup: {
          from: 'Skus',
          localField: 'product_id',
          foreignField: 'product_id',
          as: 'sku_list',
        },
      },
      {
        $project: {
          isDraft: 0,
          isPublished: 0,
          isDeleted: 0,
          __v: 0,
          createdAt: 0,
          updatedAt: 0,
          'sku.isDraft': 0,
          'sku.isPublished': 0,
          'sku.isDeleted': 0,
          'sku.__v': 0,
          'sku.createdAt': 0,
          'sku.updatedAt': 0,
          'sku_list.isDraft': 0,
          'sku_list.isPublished': 0,
          'sku_list.isDeleted': 0,
          'sku_list.__v': 0,
        },
      },
    ]);
    console.log('FROM DB::', new Date().getTime());
    // 5. Save data to cache
    await this._redisService.set(keys, JSON.stringify(spu), 'EX', 60);
    return spu;
  }

  async publishProductByShop(spu_id: string) {
    return !!(await this._spusRepository.updateProductId({
      product_id: spu_id,
      data: {
        isPublished: true,
        isDraft: false,
      },
    }));
  }

  async unpublishProductByShop(spu_id: string) {
    return !!(await this._spusRepository.updateProductId({
      product_id: spu_id,
      data: { isPublished: false, isDraft: true },
    }));
  }

  async findAllPublishForShop(shop_id: string) {
    return await this._spusRepository.findAll({
      filter: { product_shop: shop_id, isPublished: true },
    });
  }

  async findAllDraftsForShop(shop_id: string) {
    return await this._spusRepository.findAll({
      filter: { product_shop: shop_id, isDraft: true },
    });
  }

  async getSkuById(product_id: string) {
    const foundProduct = await this._skuService.oneSku({ sku_id: product_id });
    return foundProduct;
  }

  async reduceStockQuantity(shop_order_ids: any[]) {
    let flag = true;
    const expireTime = 5000;
    const timeRetry = 10;
    const products = shop_order_ids.flatMap((order) => order.item_products);

    // for(let i = 0; i < products.length; i++) {
    //     let keys = `lock_${products[i].product_id}`;
    //     console.time(`lock_${products[i].product_id}`);
    //     for(let count = 1; count <= timeRetry; count++) {
    //         flag = true;
    //         const result = await this._redisService.setnx(keys, 1);
    //         console.log(`retry ${count} - ${result}`);
    //         if (result === 1) break;
    //         if (result === 0) {
    //             flag = false;
    //             await new Promise(resolve => setTimeout(resolve, 50))
    //         };
    //     }
    //     console.timeEnd(`lock_${products[i].product_id}`);
    // }

    // if(!flag) throw new RpcException('Vui lòng thử lại sau!');

    // for(let i = 0; i < products.length; i++) {
    //     const product = products[i];
    //     console.log('set expire', `lock_${product.product_id}`);
    //     this._redisService.pexpire(`lock_${product.product_id}`, expireTime)
    // }

    const session = await this._skuService.startSession();
    session.startTransaction();
    try {
      for (const product of products) {
        const sku = await this._skuService.reduceStockQuantity({
          sku_id: product.product_id,
          quantity: product.quantity,
        });
      }
      await session.commitTransaction();
    } catch (err) {
      await session.abortTransaction();
      // throw new RpcException(err);
      console.log(err);
      throw err;
    } finally {
      session.endSession();
    }
    return true;
  }

  async restockQuantity(shop_order_ids: any[]) {
    const products = shop_order_ids.flatMap((order) => order.item_products);
    const session = await this._skuService.startSession();
    session.startTransaction();

    for (const product of products) {
      const sku = await this._skuService.restockQuantity({
        sku_id: product.product_id,
        quantity: product.quantity,
      });
    }
    await session.commitTransaction();
  }
}
