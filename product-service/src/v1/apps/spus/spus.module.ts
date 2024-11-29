import { Module } from '@nestjs/common';
import { SpusService } from './spus.service';
import { SpusController } from './spus.controller';
import { SkusService } from '../skus/skus.service';
import { SkusModule } from '../skus/skus.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Spu, SpuSchema } from 'src/v1/schemas/spus.schema';
import { SpusRepository } from 'src/v1/repositories/spus.repository';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { UserClientService } from 'src/v1/connections/init.grpc.user';
console.log(join(__dirname));
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Spu.name, schema: SpuSchema }]), 
    // UsersModule,
    SkusModule,
    // ClientsModule.register([
    //   {
    //     name: 'USER_SERVICE',
    //     transport: Transport.GRPC,
    //     options: {
    //       package: 'user',
    //       protoPath: join(__dirname, '../../connections/init.user.proto'),
    //       url: 'localhost:3000'
    //     },
    //   },
    // ]),
  ],
  providers: [SpusService, SpusRepository, UserClientService],
  controllers: [SpusController]
})
export class SpusModule {}
