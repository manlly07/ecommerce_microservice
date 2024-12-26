import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {

    const requiredPermissions = this.reflector.get<string[]>('permissions', context.getHandler());
    if (!requiredPermissions) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    
    const permissions = request['user'].roles

    const hasPermissions = requiredPermissions.every((requiredPermission) => permissions.includes(requiredPermission));
    
    console.log(permissions);
    console.log(requiredPermissions);
    // const userHasAllPermissions = hasPermissions.every((hasPermission) => hasPermission === true);

    if (!hasPermissions) {
      throw new ForbiddenException('Bạn không có quyền truy cập vào tài nguyên này.');
    }

    return hasPermissions;
  }
}
