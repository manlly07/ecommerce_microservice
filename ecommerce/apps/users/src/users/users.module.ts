import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { RepositoriesModule } from 'y/repositories';
@Module({
  imports: [
    RepositoriesModule
  ],
  controllers: [UsersController],
  providers: [UsersService]
})
export class UsersModule {}
