import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma';
import { ConceptsService } from './concepts.service';

describe('ConceptsService', () => {
  let service: ConceptsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConceptsService, PrismaService],
    }).compile();

    service = module.get<ConceptsService>(ConceptsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
