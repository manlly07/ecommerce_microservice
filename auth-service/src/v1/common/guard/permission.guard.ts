import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserRoleService } from 'src/v1/apps/user-role/user-role.service';
import { UsersService } from 'src/v1/apps/users/users.service';

@Injectable()
export class PermissionsGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private _userRoleService: UserRoleService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {

    const requiredPermissions = this.reflector.get<string[]>('permissions', context.getHandler());
    if (!requiredPermissions) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    
    const permissions = request['user'].roles

    // const permissions = await this._userRoleService.getUserRoles(user_id);
    
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
