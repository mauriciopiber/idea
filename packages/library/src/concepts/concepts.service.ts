import { Injectable } from '@nestjs/common';
import { PrismaPromise } from '@prisma/client';
import { PrismaService } from '../prisma';

import { Concept } from '../types';
import { CreateConceptDto } from './dto/create-concept.dto';
import { UpdateConceptDto } from './dto/update-concept.dto';

@Injectable()
export class ConceptsService {
  constructor(private prismaClient: PrismaService) {}

  create(createConceptDto: CreateConceptDto) {
    /* eslint-disable-next-line */
    createConceptDto;
    return 'This action adds a new Concept';
  }

  async upsert(createConceptDto: CreateConceptDto) {
    const { idea } = createConceptDto;

    await this.prismaClient.concepts.upsert({
      where: { idea: idea },
      update: { idea: idea },
      create: { idea },
    });
  }

  findAll(): PrismaPromise<Concept[]> {
    return this.prismaClient.concepts.findMany({ include: { layer: true } });
  }

  findOne(id: number) {
    return `This action returns a #${id} Concept`;
  }

  update(id: number, updateConceptDto: UpdateConceptDto) {
    /* eslint-disable-next-line */
    updateConceptDto;
    return `This action updates a #${id} Concept`;
  }

  remove(id: number) {
    return `This action removes a #${id} Concept`;
  }
}
