import { Module } from '@nestjs/common';
import { LayersService } from './layers.service';

@Module({
  providers: [LayersService],
})
export class LayersModule {}
