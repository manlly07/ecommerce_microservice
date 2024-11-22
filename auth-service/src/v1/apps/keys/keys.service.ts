import { Injectable } from '@nestjs/common';
import { UserTokenType } from './keys.dto';
import { KeysRepository } from 'src/v1/repositories/keys.repository';
@Injectable()
export class KeysService {
    constructor(private _keysRepository: KeysRepository) {}

    async createUserToken(data: UserTokenType) {
        return await this._keysRepository.create( data );
    }

    async findUserToken(filter: Object) {
        return await this._keysRepository.findFirst({
            where: {
                ...filter,
                is_active: true,
                expiration: {
                    gte: new Date(),
                }
            },
            include: {
                user: true
            }
        });
    }

    async deleteUserToken(conditions: Object) {
        return await this._keysRepository.updateMany({
            where: {
                ...conditions,
                is_active: true,
            },
            data: {
                is_active: false,
            }
        });
    }

    async update(params: {
        where: Object,
        data: Object
    }) {
        return await this._keysRepository.update(params);
    }

    async findMany(params: {
        where: object,
        include?: object,
    }) {
        return await this._keysRepository.findAll(params);
    }
}
