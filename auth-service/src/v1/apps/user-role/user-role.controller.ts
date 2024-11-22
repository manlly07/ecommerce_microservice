import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserRoleService } from './user-role.service';

@Controller('user-role')
export class UserRoleController {
    constructor(private _userRoleService: UserRoleService) {}

    @Get()
    async getRoles() {
        return await this._userRoleService.getRoles()
    }

    @Post('assign')
    async assignRole(@Body('user_id') user_id: string, @Body('role_id') role_id: string) {
        return await this._userRoleService.assignRole(user_id, role_id) 
    }

    @Get(':user_id')
    async getUserRoles(@Param('user_id') user_id: string) {
        return await this._userRoleService.getUserRoles(user_id)
    }
}
