
import {
    CanActivate,
    ExecutionContext,
    ForbiddenException,
    Inject,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
  import { JwtService } from '@nestjs/jwt';
import { ClientProxy } from '@nestjs/microservices';
  import { Request } from 'express';
import { firstValueFrom } from 'rxjs';
  
  @Injectable()
  export class AuthGuard implements CanActivate {
    constructor( 
        private jwtService: JwtService,
        @Inject('REDIS_SERVICE') private _redisClient: ClientProxy,
    ) {}
  
    async canActivate(context: ExecutionContext) {
      console.log("AUTH GUARD")
      const request = context.switchToHttp().getRequest();
      const token = this.extractTokenFromHeader(request);
      
      if (!token) {
        throw new ForbiddenException('Access token is missing');
      }

      const { user_login_ip, user_id } = request.body;
      const payload = await firstValueFrom(
        this._redisClient.send('get', {
          key: `user:${user_id}:ip${user_login_ip}`
        })
      )

      console.log(payload);
      if(!payload) throw new ForbiddenException('Invalid access token');

      try {
        console.log("public key: ", payload.user_public_key)
        console.log("token", token)
        const data = await this.jwtService.verifyAsync(
          token,
          {
            secret: payload.user_public_key,
          }
        );
        console.log(data);

        if(data.user_id !== user_id) throw new ForbiddenException();
        request['user'] = data;

      } catch (error) {
        if (error.name === 'TokenExpiredError') {
            throw new UnauthorizedException('Access token expired');
        } else {
            throw new ForbiddenException('Invalid access token');
        }
      }
      return true;
    }
  
    private extractTokenFromHeader(request: Request) {
      const [type, token] = request.headers.authorization?.split(' ') ?? [];
      return type === 'Bearer' ? token : undefined;
    }
  }
  