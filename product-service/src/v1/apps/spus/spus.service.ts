import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { SpusRepository } from 'src/v1/repositories/spus.repository';
import { SkusService } from '../skus/skus.service';
import { ISPU } from './spus.dto';
import { UserClientService } from 'src/v1/connections/init.grpc.user';

@Injectable()
export class SpusService {
    constructor(
        private _spusRepository: SpusRepository,
        private _skuService: SkusService,
        private userClientService: UserClientService
    ) {}

    async findAll() {
        return await this._spusRepository.findAll();
    }

    async create(dto: ISPU) {

        const foundShop = await this.userClientService.isUserExists(dto.product_shop);

        if(!foundShop) throw new NotFoundException('Shop not found');

        const newSpu = await this._spusRepository.create(dto);

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
}
