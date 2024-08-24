import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma';
import { CreateLayerDto } from './dto/create-layer.dto';
import { UpdateLayerDto } from './dto/update-layer.dto';

@Injectable()
export class LayersService {
  constructor(private prismaClient: PrismaService) {}

  create(createLayerDto: CreateLayerDto) {
    /* eslint-disable-next-line */
    createLayerDto;
    return 'This action adds a new Layer';
  }

  async upsert(createLayerDto: CreateLayerDto) {
    const { name } = createLayerDto;

    await this.prismaClient.layers.upsert({
      where: { name },
      update: { name },
      create: { name },
    });
  }

  findAll() {
    return this.prismaClient.layers.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} Layer`;
  }

  update(id: number, updateLayerDto: UpdateLayerDto) {
    /* eslint-disable-next-line */
    updateLayerDto;
    return `This action updates a #${id} Layer`;
  }

  remove(id: number) {
    return `This action removes a #${id} Layer`;
  }
}
