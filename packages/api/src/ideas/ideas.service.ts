import { PrismaService } from '@ideas/library';
import { Injectable } from '@nestjs/common';
import { CreateIdeaDto } from './dto/create-idea.dto';
import { UpdateIdeaDto } from './dto/update-idea.dto';

@Injectable()
export class IdeasService {
  constructor(private prismaClient: PrismaService) {}

  create(createIdeaDto: CreateIdeaDto) {
    /* eslint-disable-next-line */
    createIdeaDto;
    return 'This action adds a new idea';
  }

  findAll() {
    return this.prismaClient.ideas.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} idea`;
  }

  update(id: number, updateIdeaDto: UpdateIdeaDto) {
    /* eslint-disable-next-line */
    updateIdeaDto;
    return `This action updates a #${id} idea`;
  }

  remove(id: number) {
    return `This action removes a #${id} idea`;
  }
}
