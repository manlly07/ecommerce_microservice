import { Module } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { PermissionsController } from './permissions.controller';
import { PermissionsRepository } from 'src/v1/repositories/permission.repository';

@Module({
  providers: [PermissionsService, PermissionsRepository],
  controllers: [PermissionsController]
})
export class PermissionsModule {}
