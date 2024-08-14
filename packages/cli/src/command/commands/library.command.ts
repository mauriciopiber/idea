import { InternalImport } from '@ideas/library';
import { Command, CommandRunner } from 'nest-commander';

@Command({
  name: 'library',
  description: 'Check import from monorepo',
  options: { isDefault: false },
})
export class LibraryCommand extends CommandRunner {
  async run(): Promise<void> {
    console.log(`${InternalImport()}`);
  }
}
