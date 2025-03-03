import { Module } from '@nestjs/common';
import { SpusModule } from './spus/spus.module';
import { SkusModule } from './skus/skus.module';
@Module({
  imports: [SpusModule, SkusModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
