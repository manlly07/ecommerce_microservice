import { Test, TestingModule } from '@nestjs/testing';
import { Shared/loggerService } from './shared/logger.service';

describe('Shared/loggerService', () => {
  let service: Shared/loggerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Shared/loggerService],
    }).compile();

    service = module.get<Shared/loggerService>(Shared/loggerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
