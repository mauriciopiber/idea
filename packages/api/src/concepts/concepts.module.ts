import { ConceptsService, PrismaModule } from '@ideas/library';
import { Module } from '@nestjs/common';
import { ConceptsController } from './concepts.controller';

@Module({
  imports: [PrismaModule],
  controllers: [ConceptsController],
  providers: [ConceptsService],
})
export class ConceptsModule {}
