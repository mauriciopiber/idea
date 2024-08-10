#!/usr/bin/env node

// src/main.ts
import { CommandFactory } from 'nest-commander';
import { CommandModule } from './command/command.module';

async function bootstrap() {
  try {
    await CommandFactory.run(CommandModule, ['warn', 'error']);
  } catch (error) {
    console.error('Error during command execution:', error);
  }
}

bootstrap();
