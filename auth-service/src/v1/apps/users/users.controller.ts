import { BadRequestException, Body, Controller, Get, Param, Post, Query, Req, Res, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { PaginationsRequest, UserLoginRequest, UserRegisterRequest } from './users.dto';
import { Response, Request } from 'express';
import { AuthGuard } from 'src/v1/common/guard/auth.guard';
import { InfoGuard } from 'src/v1/common/guard/info.guard';
import { Permissions } from 'src/v1/common/utils';
import { PermissionsGuard } from 'src/v1/common/guard/permission.guard';
import { GrpcMethod } from '@nestjs/microservices';

@Controller('users')
export class UsersController {
    constructor(
        private _usersService: UsersService
    ) {}

    @UseGuards(InfoGuard)
    @Get('')
    async getUsers(@Query() pagination: PaginationsRequest) {
        return {
            data: await this._usersService.getUsers(pagination)
        };
    }

    @Post('register')
    async registerUser(@Body() dto: UserRegisterRequest) {
        await this._usersService.registerUser(dto.user_email);
        return {
            message: 'Check your email!'
        }
    }
    
    @UseGuards(InfoGuard)
    @Post('login')
    async login(@Body() dto: UserLoginRequest, @Res() response: Response) {
        console.log(dto);
        response.json({
            message: 'Login success',
            data: await this._usersService.login(dto, response)
        })
    }
    
    @UseGuards(InfoGuard)
    @Post('logout')
    async logout(@Req() request: Request) {
        const refreshToken = request.cookies['refresh_token'];
        return {
            message: 'Logout success',
            data: await this._usersService.logout(refreshToken)
        }
        
    }

    @UseGuards(InfoGuard)
    @Get('verify')
    async verify(@Query('token') token: string) {
        await this._usersService.verify(token);
        return {
            message: 'Check your email to get your password!'
        }
    }
    @UseGuards(InfoGuard ,AuthGuard, PermissionsGuard)
    @Permissions('View Users')
    @Post('authenticated')
    async authenticated(@Req() request: Request) {
        return await this._usersService.authenticated(request.body.user_id);
    }
    
    @UseGuards(InfoGuard)
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
    
    @UseGuards(InfoGuard)
    @Get(':user_id')
    async getUserById(@Param('user_id') user_id: string) {
        return await this._usersService.authenticated(user_id);
    }

    @GrpcMethod('UserService', 'FindUserById')
    async FindUserById(data: { userId: string }): Promise<{ exists: boolean }> {
        console.log("Controller -> UserService -> FindUserById -> data", data);
        return this._usersService.FindUserById(data.userId);
    }
}
