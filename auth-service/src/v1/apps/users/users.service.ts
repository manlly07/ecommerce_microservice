import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UserLoginRequest } from './users.dto';
import { UserRepository } from 'src/v1/repositories/user.repository';
import { ClientProxy } from '@nestjs/microservices';
import { generateToken, unGetSelectDataFromObject, updateNestedArrayParser, verifyToken } from 'src/v1/common/utils';
import { CONSTANT, DEFAULT_TIME_EXPIRATION_EMAIL } from 'src/v1/common/constants';
import * as bcrypt from "bcrypt";
import { randomBytes } from 'crypto';
import { KeysService } from '../keys/keys.service';
import { Response } from 'express';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class UsersService {
    constructor(
        private _userRepository: UserRepository,
        private _keyService: KeysService,

        @Inject('NOTIFICATION_SERVICE') private _notificationClient: ClientProxy,
        @Inject('REDIS_SERVICE') private _redisClient: ClientProxy,
    ) {}

    async registerUser(user_email: string) {
        const foundUser = await this._userRepository.findByEmail({
            user_email: user_email
        });
        if (foundUser) {
            throw new BadRequestException('User already exists');
        }
        
        const token = await generateToken({ user_email }, process.env.SECRET_KEY_OTP, DEFAULT_TIME_EXPIRATION_EMAIL.toString());
        
        const data = {
            email: user_email,
            token,
        }
        this._notificationClient.emit('send_email_token', { data });
        return;
    }

    async login(data: UserLoginRequest, response: Response) {
        const { user_email, user_password } = data;
        const findUser = await this._userRepository.findByEmail({
            user_email: user_email
        });

        if(!findUser) throw new BadRequestException('User not registered');

        const isMatch = await bcrypt.compare(user_password, findUser.user_password);
        if(!isMatch) throw new BadRequestException('Invalid password');

        const publicKey = randomBytes(64).toString('hex');
        const privateKey = randomBytes(64).toString('hex');

        const payload = {
            user_id: findUser.id,
            user_email,
        }
        
        // checked already logged in user
        const checkUserToken = await this._keyService.findUserToken({
            user_id: findUser.id,
            user_agent: data.user_agent,
            user_login_ip: data.user_login_ip,
        });

        if(checkUserToken) {
            // Redirect('https://google.com')
            return {
                message: "You have logged in!"
            }
        };

        const refreshToken = await generateToken(payload, privateKey, CONSTANT.REFRESH_TOKEN_EXPIRATION.toString());
        const accessToken = await generateToken(payload, publicKey, CONSTANT.ACCESS_TOKEN_EXPIRATION.toString());

        const keys = await this._keyService.createUserToken({
            user_id: findUser.id,
            user_agent: data.user_agent,
            user_login_ip: data.user_login_ip,
            user_private_key: privateKey,
            user_public_key: publicKey,
            user_refresh_token: refreshToken,
            expiration: new Date(Date.now() + CONSTANT.REFRESH_TOKEN_EXPIRATION),
        })
        
        console.log(keys);
        if(!keys) throw new BadRequestException('Login failed! Please try again');

        this._redisClient.emit('set', {
            key: `user:${findUser.id}:ip${data.user_login_ip}`,
            value: {
                user_public_key: publicKey,
            },
            ttl: CONSTANT.ACCESS_TOKEN_EXPIRATION / 1000
        })

        response.cookie('refresh_token', refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: CONSTANT.REFRESH_TOKEN_EXPIRATION,
        })
        return {
            user_id: findUser.id,
            accessToken,
        }
    }

    async verify(token: string) {

        const payload = await verifyToken(token, process.env.SECRET_KEY_OTP);
        console.log(payload);

        const { user_email } = payload

        const foundUser = await this._userRepository.findByEmail({
            user_email
        });

        if (foundUser) {
            throw new BadRequestException('User already exists');
        }

        const salt = await bcrypt.genSalt();
        const password = await bcrypt.hash(user_email, salt); 

        const newUser = await this._userRepository.create({
            user_email,
            user_password: password,
            user_salt: salt,
        })

        if(!newUser) throw new BadRequestException('Create user failed! Please try again');

        const data = {
            email: user_email,
            password: user_email,
        }
        this._notificationClient.emit('send_email_password', { data });

        return;
    }

    async userHasPermission(user_id: string, permission: Array<string>) {
        // if(permission ) return true
        const userWithRole = await this._userRepository.findById({
            id: user_id,
            include: {
                user_roles: {
                    include: {
                        role: {
                            include: {
                                role_permissions: {
                                    include: {
                                        permission: true
                                    }
                                }
                            }
                        }
                    }
                },
            }
        }) as any;

        // return userWithRole;
        if(!userWithRole?.user_roles) return false;

        const roles = updateNestedArrayParser(userWithRole)

        return roles.some((role : any) => permission.includes(role.permission_name));
    }

    async authenticated(user_id: string) {
        let user = await firstValueFrom(
            this._redisClient.send('get', {
                key: `user:${user_id}`
            })
        )

        if(user) {
            return {
                ...user,
                isRedis: true,
            }
        }

        user = await this._userRepository.findById({
            id: user_id
        })
        user = unGetSelectDataFromObject(user, ['user_password', 'user_phone', 'user_email', 'user_salt'])

        this._redisClient.emit('set', {
            key: `user:${user_id}`,
            value: user,
            ttl: CONSTANT.REFRESH_TOKEN_EXPIRATION / 1000
        })

        return {
            ...user,
            isRedis: false,
        }
    }

    async refresh(user_id: string, user_login_ip: string, refreshToken: string, response: Response) {
        const keyStore = await this._keyService.findUserToken({
            user_id,
            user_login_ip,
            user_refresh_token: refreshToken,
        });

        console.log(keyStore)

        if(!keyStore) throw new NotFoundException('Not found!');

        const publicKey = randomBytes(64).toString('hex');
        const privateKey = randomBytes(64).toString('hex');
        
        const newRefreshToken = await generateToken({ user_id }, privateKey, new Date(keyStore.expiration).getTime().toString());

        const newAccessToken = await generateToken({ user_id }, publicKey, CONSTANT.ACCESS_TOKEN_EXPIRATION.toString());

        const updateTokenUsed = await this._keyService.update({
            where: {
                user_id,
                user_login_ip,
                user_refresh_token: refreshToken,
            },
            data: {
                is_active: false,
            }
        })

        const keys = await this._keyService.createUserToken({
            user_id: keyStore.user_id,
            user_agent: keyStore.user_agent,
            user_login_ip: keyStore.user_login_ip,
            user_private_key: privateKey,
            user_public_key: publicKey,
            user_refresh_token: newRefreshToken,
            expiration: keyStore.expiration,
        })

        if(!keys) throw new BadRequestException('Refresh token failed! Please try again');

        this._redisClient.emit('set', {
            key: `user:${user_id}:ip${user_login_ip}`,
            value: {
                user_public_key: publicKey,
            },
            ttl: CONSTANT.ACCESS_TOKEN_EXPIRATION / 1000
        })

        response.cookie('refresh_token', newRefreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: CONSTANT.REFRESH_TOKEN_EXPIRATION,
        })

        return {
            user_id,
            accessToken: newAccessToken,
        }
    }
}
