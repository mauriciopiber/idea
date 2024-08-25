import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma';
import { LayersService } from './layers.service';

describe('LayersService', () => {
  let service: LayersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LayersService, PrismaService],
    }).compile();

    service = module.get<LayersService>(LayersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
