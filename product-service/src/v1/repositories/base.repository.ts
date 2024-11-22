export abstract class BaseRepository<T> {
    abstract findAll(params: any): Promise<T[]>;
    abstract findById(params: any): Promise<T | null>;
    abstract create(data: any): Promise<T>;
    abstract createMany(data: any): Promise<T | T[]>;
    abstract update(params: any): Promise<T>;
    abstract updateMany(params: any): Promise<T | T[]>;
    abstract softDelete(params: any): Promise<T>;
}
