import { Test, TestingModule } from '@nestjs/testing';
import { Shared/authService } from './shared/auth.service';

describe('Shared/authService', () => {
  let service: Shared/authService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Shared/authService],
    }).compile();

    service = module.get<Shared/authService>(Shared/authService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
