import { ConceptsService } from '@ideas/library';
import { Controller, Get } from '@nestjs/common';

@Controller('concepts')
export class ConceptsController {
  constructor(private readonly conceptsService: ConceptsService) {}

  @Get()
  findAll() {
    return this.conceptsService.findAll();
  }
}
