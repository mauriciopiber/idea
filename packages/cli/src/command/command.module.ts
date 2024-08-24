import { ConceptsService, LayersService, PrismaModule } from '@ideas/library';
import { Module } from '@nestjs/common';
import { BackupCommand } from './commands/backup.command';
import { GreetCommand } from './commands/greet.command';
import { AddIdeaCommand } from './commands/ideas/add.command';
import { IdeaCommand } from './commands/ideas/list.command';
import { LibraryCommand } from './commands/library.command';

@Module({
  imports: [PrismaModule],
  providers: [
    GreetCommand,
    AddIdeaCommand,
    BackupCommand,
    IdeaCommand,
    ConceptsService,
    LayersService,
    LibraryCommand,
  ],
})
export class CommandModule {}
