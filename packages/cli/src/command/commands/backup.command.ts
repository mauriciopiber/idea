import { ConceptsService, LayersService } from '@ideas/library';
import * as appRoot from 'app-root-path';
import { Command, CommandRunner } from 'nest-commander';
import { writeFileSync } from 'node:fs';

@Command({
  name: 'backup',
  description: 'Backup database',
  options: { isDefault: false },
})
export class BackupCommand extends CommandRunner {
  constructor(
    private conceptsService: ConceptsService,
    private layersService: LayersService,
  ) {
    super();
  }

  async run(): Promise<void> {
    const concepts = await this.conceptsService.findAll();

    writeFileSync(
      `${appRoot.path}/packages/library/prisma/data/concepts.json`,
      JSON.stringify(
        concepts.map((idea) => idea.idea),
        null,
        2,
      ),
    );

    const layers = await this.layersService.findAll();

    writeFileSync(
      `${appRoot.path}/packages/library/prisma/data/layers.json`,
      JSON.stringify(
        layers.map((layer) => layer.name),
        null,
        2,
      ),
    );

    console.log(`Backup Database`);
  }
}
