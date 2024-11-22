
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
import { KeysService } from 'src/v1/apps/keys/keys.service';
  
  @Injectable()
  export class AuthGuard implements CanActivate {
    constructor( 
        private jwtService: JwtService,
        @Inject('REDIS_SERVICE') private _redisClient: ClientProxy,
    ) {}
  
    async canActivate(context: ExecutionContext) {
      const request = context.switchToHttp().getRequest();
      const token = this.extractTokenFromHeader(request);
      
      if (!token) {
        throw new ForbiddenException('Access token is missing');
      }

      const { user_login_ip } = request.body;
      const user_id = request.headers['x-client-id'];

      const payload = await firstValueFrom(
        this._redisClient.send('get', {
          key: `user:${user_id}:ip${user_login_ip}`
        })
      )      
      console.log(payload);
      if(!payload) throw new ForbiddenException('Invalid access token');

      // const user_login_ip = request.ip;
      // const user_agent = request.get('User-Agent');

      // request.body = { ...request.body, user_login_ip, user_agent };
      try {
        // const keyStore = await this._keyService.findUserToken({
        //     user_id: request.body.user_id,
        //     user_agent: user_agent,
        //     user_login_ip: user_login_ip,
        // });
        // console.log(keyStore)

        // if(!keyStore) throw new ForbiddenException();

        // const payload = await this.jwtService.verifyAsync(
        //   token,
        //   {
        //     secret: keyStore.user_public_key,
        //   }
        // );

        // if(keyStore.user_id !== payload.user_id) throw new ForbiddenException();
        // request['user'] = payload;
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
      console.log(request);
      const [type, token] = request.headers.authorization?.split(' ') ?? [];
      return type === 'Bearer' ? token : undefined;
    }
  }
  