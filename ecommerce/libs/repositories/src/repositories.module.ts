import { Module } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { PrismaService } from 'y/prisma';

@Module({
  providers: [UserRepository, PrismaService],
  exports: [UserRepository],
})
export class RepositoriesModule {}
