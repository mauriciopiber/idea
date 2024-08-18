import { PrismaService } from '@ideas/library';
import { Injectable } from '@nestjs/common';

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
