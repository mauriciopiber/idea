import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class IdeasService {
  constructor(private prismaService: PrismaService) {}
  async addIdea() {
    console.log('addIdea');
  }

  findAll() {
    return this.prismaService.ideas.findMany();
  }
}
