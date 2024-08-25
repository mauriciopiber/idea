import { LayersService, PrismaModule } from '@ideas/library';
import { Module } from '@nestjs/common';
import { LayersController } from './layers.controller';

@Module({
  imports: [PrismaModule],
  controllers: [LayersController],
  providers: [LayersService],
})
export class LayersModule {}
