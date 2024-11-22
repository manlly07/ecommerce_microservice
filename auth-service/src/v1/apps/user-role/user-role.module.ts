import { Module } from '@nestjs/common';
import { UserRoleService } from './user-role.service';
import { UserRoleController } from './user-role.controller';
import { UserRoleRepository } from 'src/v1/repositories/userRole.repository';

@Module({
  providers: [UserRoleService, UserRoleRepository],
  controllers: [UserRoleController],
  exports: [UserRoleService]
})
export class UserRoleModule {}
