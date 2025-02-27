import { Injectable } from '@nestjs/common';
// import { Spu } from './schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongoRepository } from './mongo.repository';
import { Spu } from '../schemas/spus.schema';

@Injectable()
export class SpusRepository extends MongoRepository<Spu> {
    constructor(@InjectModel(Spu.name) private spusModel: Model<Spu>) {
        super(spusModel);
    }

    async aggregate(array: any[]) {
        return await this.spusModel.aggregate(array);
    }
}
