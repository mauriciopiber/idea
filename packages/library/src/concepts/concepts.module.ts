import { Module } from '@nestjs/common';
import { ConceptsService } from './concepts.service';

@Module({
  providers: [ConceptsService],
})
export class ConceptsModule {}
