import { Controller } from '@nestjs/common';
import { AddressService } from './address.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserAddressDTO } from 'y/dtos';

@Controller('address')
export class AddressController {
    constructor(
        private readonly _addressService: AddressService
    ) {}

    @MessagePattern('address.create')
    create(@Payload() data : UserAddressDTO) {
        return this._addressService.create(data);
    }

    @MessagePattern('address.update')
    update(@Payload() data: UserAddressDTO) {
        return this._addressService.update(data);
    }

    @MessagePattern('address.delete')
    delete(@Payload() id: string) {
        return this._addressService.delete(id);
    }

    @MessagePattern('address.findById')
    findById(@Payload() id: string) {
        return this._addressService.findById(id);
    }

    @MessagePattern('address.findAll')
    findAll() {
        return this._addressService.findAll();
    }
}
