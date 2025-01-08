import { Module } from '@nestjs/common';
import { Shared/loggerService } from './shared/logger.service';

@Module({
  providers: [Shared/loggerService],
  exports: [Shared/loggerService],
})
export class Shared/loggerModule {}
