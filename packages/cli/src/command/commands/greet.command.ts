import { Command, CommandRunner, Option } from 'nest-commander';

interface GreetCommandOptions {
  greeting?: string;
}

@Command({
  name: 'greet',
  description: 'Greets a person with an optional greeting message',
  arguments: '<name>',
  options: { isDefault: false },
})
export class GreetCommand extends CommandRunner {
  async run(
    passedParams: string[],
    options?: GreetCommandOptions,
  ): Promise<void> {
    const [name] = passedParams;
    const greeting = options?.greeting || 'Hello';
    console.log(`${greeting}, ${name}!`);
  }

  @Option({
    flags: '-g, --greeting <greeting>',
    description: 'Custom greeting message',
  })
  parseGreeting(val: string): string {
    return val;
  }
}
