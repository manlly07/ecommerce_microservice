import { BadRequestException, Injectable, Param } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { SkuRepository } from 'y/repositories/sku.repository';

@Injectable()
export class SkusService {
  constructor(private _skusRepository: SkuRepository) {}

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
    const sku = await this._skusRepository.findOne({ sku_id: sku_id });

    return sku;
  }

  async allSkuBySpuId({ product_id }) {
    const skus = await this._skusRepository.findAll({
      filter: { product_id: product_id },
    });
    return skus;
  }

  async reduceStockQuantity({ sku_id, quantity }) {
    const sku = await this.oneSku({ sku_id: sku_id });
    if (sku.sku_stock >= quantity) {
      return await this._skusRepository.reduceStockQuantity(sku_id, quantity);
    } else {
      throw new RpcException({
        message:
          'Sản phẩm này đã hết hàng. Xin quý khách vui lòng chọn sản phẩm khác!',
        response: { product_id: sku.sku_id, sku_stock: sku.sku_stock },
      });
    }
  }

  async restockQuantity({ sku_id, quantity }) {
    return await this._skusRepository.restockQuantity(sku_id, quantity);
  }

  async startSession() {
    return await this._skusRepository.startSession();
  }
}
