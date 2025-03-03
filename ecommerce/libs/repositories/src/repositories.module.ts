import { Module } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { DatabaseProvider, PrismaService } from 'y/prisma';
import { KeysRepository } from './keys.repository';
import { RolesRepository } from './roles.repository';
import { PermissionsRepository } from './permissions.repository';
import { UserRoleRepository } from './user_role.repository';
import { RolePermissionRepository } from './rolepermission.repository';
import { SpuRepository } from './spu.repository';
import { SkuRepository } from './sku.repository';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Spu, SpuSchema } from 'y/prisma/schemas/spus.schema';
import { Sku, SkuSchema } from 'y/prisma/schemas/skus.schema';
import { CartsRepository } from './carts.repository';
import { CartItemRepository } from './cart.item.repository';
import { OrderRepository } from './order.repository';
import { OrderDetailRepository } from './order.item.repository';
import { UserAddressRepository } from './user.address.repository';
import { PaymentMethodRepository } from './payment.repository';

const repository = [
  UserRepository, 
    KeysRepository, 
    RolesRepository, 
    PermissionsRepository, 
    UserRoleRepository,
    RolePermissionRepository,

    SpuRepository,
    SkuRepository,

    CartsRepository,
    CartItemRepository,

    OrderRepository,
    OrderDetailRepository,
    UserAddressRepository,
    PaymentMethodRepository
]
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
      envFilePath: '.env', 
    }),
    DatabaseProvider,
    MongooseModule.forFeature([
      { name: Spu.name, schema: SpuSchema },
      { name: Sku.name, schema: SkuSchema }
    ])
  ],
  providers: [
    PrismaService,

    ...repository,

  ],
  exports: [...repository],
})
export class RepositoriesModule {}