import { Injectable, Param } from '@nestjs/common';
import { SkusRepository } from 'src/v1/repositories/skus.repository';

@Injectable()
export class SkusService {
    constructor(private _skusRepository: SkusRepository) {}

    async findAll() {
        return await this._skusRepository.findAll();
    }

    async create(data: any) {
        return await this._skusRepository.create(data);
    }

    async createMany(data: any) {
        return await this._skusRepository.createMany(data);
    }

    async oneSku({ sku_id }) {
        
        // read db
        const sku = await this._skusRepository.findOne({ sku_id });

        return sku;
    }

    async allSkuBySpuId ({ product_id }) {
        console.log(product_id)
        const skus = await this._skusRepository.findAll({ filter: { product_id: product_id } });
        return skus
    }
}
