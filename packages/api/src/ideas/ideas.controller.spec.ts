import { PrismaService } from '@ideas/library';
import { Test, TestingModule } from '@nestjs/testing';
import { IdeasController } from './ideas.controller';
import { IdeasService } from './ideas.service';

describe('IdeasController', () => {
  let controller: IdeasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IdeasController],
      providers: [IdeasService, PrismaService],
    }).compile();

    controller = module.get<IdeasController>(IdeasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
