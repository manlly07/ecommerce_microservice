import { MongoBaseRepository } from './mongo-base.repository';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Spu, SpuModel } from 'y/prisma/schemas/spus.schema';

@Injectable()
export class SpuRepository extends MongoBaseRepository<Spu, any, any> {
  constructor(@InjectModel(Spu.name) private readonly spus: Model<Spu>) {
    super(spus); // Truyền UserModel vào repository cơ bản
  }

  async aggregate(pipeline: Array<any>) {
    return await this.model.aggregate(pipeline);
  }

  async updateProductId({ product_id, data }: { product_id: string, data: any }) {
    return await this.model.findOneAndUpdate({ product_id: product_id }, data);
  }
}
