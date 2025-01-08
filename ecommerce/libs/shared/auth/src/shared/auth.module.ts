import { Module } from '@nestjs/common';
import { Shared/authService } from './shared/auth.service';

@Module({
  providers: [Shared/authService],
  exports: [Shared/authService],
})
export class Shared/authModule {}
