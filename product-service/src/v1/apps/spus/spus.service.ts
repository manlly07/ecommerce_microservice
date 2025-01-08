import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { SpusRepository } from 'src/v1/repositories/spus.repository';
import { SkusService } from '../skus/skus.service';
import { IFilterOptions, ISPU } from './spus.dto';
import { UserClientService } from 'src/v1/connections/init.grpc.user';

@Injectable()
export class SpusService {
    constructor(
        private _spusRepository: SpusRepository,
        private _skuService: SkusService,
        private userClientService: UserClientService
    ) {}

    async findAll(dto: IFilterOptions) {
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

        // filter.isPublished = true;
        
        const { page = 1, perPage = 20 } = dto;
        return await this._spusRepository.findAll({ filter, page, perPage });
    }

    async create(dto: ISPU) {
        const foundShop = await this.userClientService.isUserExists(dto.product_shop);

        if(!foundShop) throw new NotFoundException('Shop not found');

        const newSpu = await this._spusRepository.create(dto);
        console.log(newSpu);
        if(newSpu && dto.sku_list.length > 0) {
            const convertSkuList = dto.sku_list.map(sku => {
                return {
                    ...sku,
                    product_id: newSpu.product_id,
                    sku_id: randomUUID()
                }
            });

            await this._skuService.createMany(convertSkuList);
        }

        return !!newSpu;
    }

    async getSpuById(spu_id: string) {
        const spu = await this._spusRepository.aggregate([
            {
                $match: {
                    product_id: spu_id
                }
            },
            {
                $lookup: {
                    from: 'Skus',
                    localField: 'product_id',
                    foreignField: 'product_id',
                    as: 'sku_list'
                }
            },
            {
                $project: {
                    isDraft: 0,
                    isPublished: 0,
                    isDeleted: 0,
                    __v: 0,
                    createdAt: 0,
                    updatedAt: 0,
                    "sku.isDraft": 0,
                    "sku.isPublished": 0,
                    "sku.isDeleted": 0,
                    "sku.__v": 0,
                    "sku.createdAt": 0,
                    "sku.updatedAt": 0,
                }
            }
        ])

        return spu;
    }

    async publishProductByShop(spu_id: string) {
        return await this._spusRepository.update({
            filter: { product_id: spu_id },
            data: { 
                isPublished: true,
                isDraft: false
            }
        });
    }

    async unpublishProductByShop(spu_id: string) {
        return await this._spusRepository.update({
            filter: { product_id: spu_id },
            data: { isPublished: false, isDraft: true }
        });
    }

    async findAllPublishForShop(shop_id: string) {
        return await this._spusRepository.findAll({
            filter: { product_shop: shop_id, isPublished: true }
        });
    }

    async findAllDraftsForShop(shop_id: string) {
        return await this._spusRepository.findAll({
            filter: { product_shop: shop_id, isDraft: true }
        });
    }

    async CheckProductExists(product_id: string) {
        const foundProduct = await this._skuService.oneSku({ sku_id: product_id });
        console.log(foundProduct);
        return { exists: !!foundProduct };
    }
}
