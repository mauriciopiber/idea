import { LayersService } from '@ideas/library';
import { Controller, Get } from '@nestjs/common';

@Controller('layers')
export class LayersController {
  constructor(private readonly layersService: LayersService) {}

  @Get()
  findAll() {
    return this.layersService.findAll();
  }
}
