import { Module } from '@nestjs/common';
import { RolePermissionService } from './role-permission.service';
import { RolePermissionController } from './role-permission.controller';
import { PermissionsRepository } from 'src/v1/repositories/permission.repository';
import { RolesRepository } from 'src/v1/repositories/roles.repository';
import { RolePermissionRepository } from 'src/v1/repositories/rolePermission.repository';

@Module({
  providers: [RolePermissionService, RolePermissionRepository, RolesRepository, PermissionsRepository],
  controllers: [RolePermissionController]
})
export class RolePermissionModule {}
