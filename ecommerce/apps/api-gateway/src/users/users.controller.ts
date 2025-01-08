import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { QueryDTO } from 'y/dtos/index';

import { LoginDTO } from 'y/dtos/login.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly _usersService: UsersService) {}

    @Get()
    findAll(@Query() query: QueryDTO) {
        return this._usersService.findAll(query);
    }

    @Post('register')
    async register(@Body() dto: LoginDTO) {
        return this._usersService.register(dto);
    } 

}
