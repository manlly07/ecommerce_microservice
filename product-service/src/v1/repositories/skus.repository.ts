import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongoRepository } from './mongo.repository';
import { Sku } from '../schemas/skus.schema';

@Injectable()
export class SkusRepository extends MongoRepository<Sku> {
    constructor(@InjectModel(Sku.name) private skusModel: Model<Sku>) {
        super(skusModel);
    }

    async findOne(prams: any): Promise<Sku | null> {
        return await this.skusModel.findOne(prams).lean<Sku>();
    }

}
