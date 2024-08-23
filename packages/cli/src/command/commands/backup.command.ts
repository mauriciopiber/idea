import * as appRoot from 'app-root-path';
import { Command, CommandRunner } from 'nest-commander';
import { writeFileSync } from 'node:fs';
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

    const ideasFilePath = `${appRoot.path}/packages/library/prisma/data/ideas.json`;

    writeFileSync(
      ideasFilePath,
      JSON.stringify(
        ideas.map((idea) => idea.idea),
        null,
        2,
      ),
    );

    console.log(`Backup Database`);
  }
}
