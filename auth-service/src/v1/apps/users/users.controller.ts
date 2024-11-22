import { BadRequestException, Body, Controller, Get, Param, Post, Query, Req, Res, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserLoginRequest, UserRegisterRequest } from './users.dto';
import { Response, Request } from 'express';
import { AuthGuard } from 'src/v1/common/guard/auth.guard';
import { InfoGuard } from 'src/v1/common/guard/info.guard';
import { Permissions } from 'src/v1/common/utils';
import { PermissionsGuard } from 'src/v1/common/guard/permission.guard';

@Controller('users')
@UseGuards(InfoGuard)
export class UsersController {
    constructor(
        private _usersService: UsersService
    ) {}
    @Post('register')
    async registerUser(@Body() dto: UserRegisterRequest) {
        await this._usersService.registerUser(dto.user_email);
        return {
            message: 'Check your email!'
        }
    }
    
    @Post('login')
    async login(@Body() dto: UserLoginRequest, @Res() response: Response) {
        console.log(dto);
        response.json({
            message: 'Login success',
            data: await this._usersService.login(dto, response)
        })
    }

    @Get('verify')
    async verify(@Query('token') token: string) {
        await this._usersService.verify(token);
        return {
            message: 'Check your email to get your password!'
        }
    }
    @Permissions('View Statistic')
    @UseGuards(AuthGuard, PermissionsGuard)
    @Post('authenticated')
    async authenticated(@Req() request: Request) {
        return await this._usersService.authenticated(request.body.user_id);
    }

    @Post('refresh')
    async refresh(@Body() dto: any, @Req() request: Request, @Res() response: Response) {
        console.log("controller");
        const refreshToken = request.cookies['refresh_token'];
        const { user_id, user_login_ip } = request.body;

        if(!refreshToken) throw new BadRequestException('Something went wrong!');

        const metadata = await this._usersService.refresh(user_id, user_login_ip, refreshToken, response);
        response.json({
            message: 'Refresh token success',
            data: metadata
        })
    }
}
