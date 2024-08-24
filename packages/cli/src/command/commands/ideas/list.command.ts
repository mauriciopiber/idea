import { ConceptsService } from '@ideas/library';
import { Command, CommandRunner } from 'nest-commander';
import { AddIdeaCommand } from './add.command';

@Command({
  name: 'ideas',
  description: 'List ideas',
  options: { isDefault: false },
  subCommands: [AddIdeaCommand],
})
export class IdeaCommand extends CommandRunner {
  constructor(private conceptsService: ConceptsService) {
    super();
  }

  async run(): Promise<void> {
    const ideas = await this.conceptsService.findAll();
    console.log(ideas);

    return;
  }
}
