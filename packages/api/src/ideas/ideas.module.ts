import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { IdeasController } from './ideas.controller';
import { IdeasService } from './ideas.service';

@Module({
  imports: [PrismaModule],
  controllers: [IdeasController],
  providers: [IdeasService],
})
export class IdeasModule {}
