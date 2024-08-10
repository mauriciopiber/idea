import { Module } from '@nestjs/common';
import { GreetCommand } from './commands/greet.command';

@Module({
  providers: [GreetCommand],
})
export class CommandModule {}
