import { Global, Module } from '@nestjs/common';
import { UsersModule } from './apps/users/users.module';
import { AuthModule } from './apps/auth/auth.module';
import { JwtModule } from '@nestjs/jwt';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { RolesModule } from './apps/roles/roles.module';
import { PermissionsModule } from './apps/permissions/permissions.module';
import { RolePermissionModule } from './apps/role-permission/role-permission.module';
import { UserRoleModule } from './apps/user-role/user-role.module';

@Module({
  imports: [

    JwtModule.register(
      {
        global:true,
      }
    ),


    UsersModule,
    AuthModule,
    
    RolesModule,
    PermissionsModule,
    RolePermissionModule,
    UserRoleModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
