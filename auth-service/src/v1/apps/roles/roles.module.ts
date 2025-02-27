import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { RolesRepository } from 'src/v1/repositories/roles.repository';

@Module({
  providers: [RolesService, RolesRepository],
  controllers: [RolesController]
})
export class RolesModule {}
