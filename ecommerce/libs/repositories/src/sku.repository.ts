import { MongoBaseRepository } from './mongo-base.repository';
import { PrismaService } from 'y/prisma';
import { Injectable } from '@nestjs/common';
import { Sku, SkuModel } from 'y/prisma/schemas/skus.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SkuRepository extends MongoBaseRepository<Sku, any, any> {
  constructor(@InjectModel(Sku.name) private readonly sku: Model<Sku>) {
    super(sku); // Truyền UserModel vào repository cơ bản
  }

  async createMany(data: Array<any>) {
    return await this.model.insertMany(data);
  }

  async startSession() {
    return await this.model.db.startSession();
  }

  async reduceStockQuantity(sku_id: string, quantity: number) {
    return await this.model.updateOne({ sku_id: sku_id }, { $inc: { sku_stock: -quantity } });
  }

  async restockQuantity(sku_id: string, quantity: number) {
    return await this.model.updateOne({ sku_id: sku_id }, { $inc: { sku_stock: quantity } });
  }
}
