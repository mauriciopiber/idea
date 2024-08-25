import { LayersService, PrismaService } from '@ideas/library';
import { Test, TestingModule } from '@nestjs/testing';

import { LayersController } from './layers.controller';

describe('LayersController', () => {
  let controller: LayersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LayersController],
      providers: [LayersService, PrismaService],
    }).compile();

    controller = module.get<LayersController>(LayersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
