import { Module } from '@nestjs/common';
import { SpusService } from './spus.service';
import { SpusController } from './spus.controller';
import { SkusService } from '../skus/skus.service';
import { SkusModule } from '../skus/skus.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Spu, SpuSchema } from 'src/v1/schemas/spus.schema';
import { SpusRepository } from 'src/v1/repositories/spus.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Spu.name, schema: SpuSchema }]), 
    // UsersModule,
    SkusModule
  ],
  providers: [SpusService, SpusRepository],
  controllers: [SpusController]
})
export class SpusModule {}
