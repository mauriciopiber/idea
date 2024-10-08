import { TestingModule } from '@nestjs/testing';
import { CommandTestFactory } from 'nest-commander-testing';
import { GreetCommand } from './greet.command';

describe('Task Command', () => {
  let commandInstance: TestingModule;

  beforeAll(async () => {
    commandInstance = await CommandTestFactory.createTestingCommand({
      imports: [GreetCommand],
    }).compile();
  });

  it('should call the "run" method', async () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    await CommandTestFactory.run(commandInstance, ['greet', 'Maurício']);

    expect(logSpy).toHaveBeenCalledWith('Hello, Maurício!');
    logSpy.mockRestore();
  });
});
