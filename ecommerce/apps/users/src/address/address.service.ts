import { Injectable } from '@nestjs/common';
import { UserAddress as UserAddressDTO } from 'y/dtos';
import { UserAddressRepository } from 'y/repositories/user.address.repository';

@Injectable()
export class AddressService {
    constructor(private _addressRepository: UserAddressRepository) {}

    async create(data: UserAddressDTO) {
        console.log(data);
        return await this._addressRepository.create(data);;
    }

    async update(dto: UserAddressDTO) {
        const { id, ...data } = dto;
        console.log(dto);
        return await this._addressRepository.update(id, data);
    }

    async delete(id: string) {
        return await this._addressRepository.update(id, { is_deleted: true });
    }

    async findById(id: string) {
        return await this._addressRepository.findOne({
            where: { id: id, is_deleted: false },
        });
    }

    async findAll() {
        return await this._addressRepository.findAll({
            where: {
                is_deleted: false,
            }
        });
    }
}
