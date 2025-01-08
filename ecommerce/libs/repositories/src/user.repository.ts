import { Injectable } from '@nestjs/common';
import { MySQLBaseRepository } from './mysql-base.repository';
import { PrismaService } from 'y/prisma';
import { Prisma, users } from 'y/prisma/generated/auth';

@Injectable()
export class UserRepository extends MySQLBaseRepository<users, Prisma.usersFindManyArgs, Prisma.usersFindUniqueArgs> {
  constructor(prisma: PrismaService) {
    super(prisma.AuthClient as any, prisma.AuthClient.users);
  }

  async findByEmail(user_email: string): Promise<users | null> {
    return this.modelDelegate.findUnique({
      where: { user_email },
    });
  }
}
