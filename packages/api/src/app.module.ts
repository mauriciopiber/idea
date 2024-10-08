import { PrismaModule } from '@ideas/library';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConceptsModule } from './concepts/concepts.module';
import { LayersModule } from './layers/layers.module';

@Module({
  imports: [PrismaModule, ConceptsModule, LayersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
