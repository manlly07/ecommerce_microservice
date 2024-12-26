// mongo.repository.ts
import { Model, Document } from 'mongoose';
import { BaseRepository } from './base.repository';

export class MongoRepository<T extends Document> extends BaseRepository<T> {
    constructor(private readonly model: Model<T>) {
        super();
    }

    async findAll(params?: {
        filter?: object;
        page?: number;
        perPage?: number;
    }): Promise<T[]> {
        const { filter, page, perPage } = params;
        console.log(filter)
        return this.model.find( filter )
            .sort({ updateAt: -1 })
            .skip((page - 1) * perPage)
            .limit(perPage)
            .lean()
            .exec() as Promise<T[]>;
    }

    async findById(id: any): Promise<T | null> {
        console.log(id);
        return this.model.findById(id).exec();
    }

    async create(data: any): Promise<T> {
        const createdDocument = new this.model(data);
        return createdDocument.save();
    }

    async createMany(data: any[]): Promise<T[]> {
        return this.model.insertMany(data);
    }

    async update(params: any): Promise<T | null> {
        const { filter, data } = params;
        return this.model.findOneAndUpdate(filter, data, { new: true }).exec();
    }

    async updateMany(params: any): Promise<any> {
        const { filter, data } = params;
        return this.model.updateMany(filter, data).exec();
    }

    async softDelete(where: object): Promise<T | null> {
        return this.model.findOneAndUpdate(where, { isDeleted: true }, { new: true }).exec();
    }
}
