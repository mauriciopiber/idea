import { PrismaService } from '@ideas/library';
import { Test, TestingModule } from '@nestjs/testing';
import { IdeasService } from './ideas.service';

describe('IdeasService', () => {
  let service: IdeasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IdeasService, PrismaService],
    }).compile();

    service = module.get<IdeasService>(IdeasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
