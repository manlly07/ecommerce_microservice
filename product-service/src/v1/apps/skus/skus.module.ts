import { Module } from '@nestjs/common';
import { SkusService } from './skus.service';
import { SkusController } from './skus.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SkusRepository } from 'src/v1/repositories/skus.repository';
import { Sku, SkuSchema } from 'src/v1/schemas/skus.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Sku.name, schema: SkuSchema }]), // Đăng ký schema Sku
  ],
  providers: [SkusService, SkusRepository],
  controllers: [SkusController],
  exports: [SkusService]
})
export class SkusModule {}
