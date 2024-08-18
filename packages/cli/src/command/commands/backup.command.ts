import { Command, CommandRunner } from 'nest-commander';
import { IdeasService } from '../../services/ideas.service';

@Command({
  name: 'backup',
  description: 'Backup database',
  options: { isDefault: false },
})
export class BackupCommand extends CommandRunner {
  constructor(private ideasService: IdeasService) {
    super();
  }

  async run(): Promise<void> {
    const ideas = await this.ideasService.findAll();

    console.log(JSON.stringify(ideas.map((idea) => idea.idea)));
    console.log(`Backup Database`);
  }
}
