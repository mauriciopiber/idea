import { Command, CommandRunner } from 'nest-commander';
import { IdeasService } from '../../../services/ideas.service';
import { AddIdeaCommand } from './add.command';

@Command({
  name: 'ideas',
  description: 'List ideas',
  options: { isDefault: false },
  subCommands: [AddIdeaCommand],
})
export class IdeaCommand extends CommandRunner {
  constructor(private ideasService: IdeasService) {
    super();
  }

  async run(): Promise<void> {
    const ideas = await this.ideasService.findAll();
    console.log(ideas);

    return;
  }
}
