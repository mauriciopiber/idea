import { CommandRunner, SubCommand } from 'nest-commander';

@SubCommand({
  name: 'add',
  description: 'Add a idea to the list',
  arguments: '<name>',
  options: { isDefault: false },
})
export class AddIdeaCommand extends CommandRunner {
  async run(passedParams: string[]): Promise<void> {
    const [name] = passedParams;

    console.log(name);

    return;
  }
}
