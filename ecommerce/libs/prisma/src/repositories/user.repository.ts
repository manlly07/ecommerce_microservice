import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { MySQLBaseRepository } from './mysql-base.repository';
import { users, Prisma  } from '../generated/auth';

@Injectable()
export class UserRepository extends MySQLBaseRepository<users,
Prisma.usersFindManyArgs, Prisma.usersFindUniqueArgs> {
  constructor(prisma: PrismaService) {
    super(prisma.AuthClient as any, prisma.AuthClient.users);
  }

  async findByEmail(user_email: string): Promise<users | null> {
    return this.modelDelegate.findUnique({
      where: { user_email },
    });
  }
}
