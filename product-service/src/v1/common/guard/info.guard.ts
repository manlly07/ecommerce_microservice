import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class InfoGuard implements CanActivate {
  constructor() {}

  async canActivate(context: ExecutionContext) {
    console.log("INFO GUARD")
    const request = context.switchToHttp().getRequest();
    const user_login_ip = request.ip;
    const user_agent = request.get('User-Agent');
    const user_id = request.headers['x-client-id'];
    request.body = { ...request.body, user_login_ip, user_agent, user_id };

    return true;
  }
}
