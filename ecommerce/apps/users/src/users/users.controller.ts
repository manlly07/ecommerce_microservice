import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { QueryDTO } from 'y/dtos/query.dto';
import { LoginDTO } from 'y/dtos/login.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly _usersService: UsersService) {}

    @MessagePattern('users.findAll')
    findAll(@Payload() query: QueryDTO) {
        return this._usersService.findAll(query);
    }

    @MessagePattern('users.register')
    async register(@Payload() dto: LoginDTO) {
        return this._usersService.register(dto);
    }
}
