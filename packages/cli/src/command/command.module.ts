import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { IdeasService } from './../services/ideas.service';
import { GreetCommand } from './commands/greet.command';
import { AddIdeaCommand } from './commands/ideas/add.command';
import { IdeaCommand } from './commands/ideas/list.command';

@Module({
  imports: [PrismaModule],
  providers: [GreetCommand, AddIdeaCommand, IdeaCommand, IdeasService],
})
export class CommandModule {}
