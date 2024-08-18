import { PrismaModule } from '@ideas/library';
import { Module } from '@nestjs/common';
import { IdeasController } from './ideas.controller';
import { IdeasService } from './ideas.service';

@Module({
  imports: [PrismaModule],
  controllers: [IdeasController],
  providers: [IdeasService],
})
export class IdeasModule {}
