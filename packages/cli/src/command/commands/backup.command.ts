import { ConceptsService } from '@ideas/library';
import * as appRoot from 'app-root-path';
import { Command, CommandRunner } from 'nest-commander';
import { writeFileSync } from 'node:fs';

@Command({
  name: 'backup',
  description: 'Backup database',
  options: { isDefault: false },
})
export class BackupCommand extends CommandRunner {
  constructor(private conceptsService: ConceptsService) {
    super();
  }

  async run(): Promise<void> {
    const ideas = await this.conceptsService.findAll();

    const ideasFilePath = `${appRoot.path}/packages/library/prisma/data/concepts.json`;

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
