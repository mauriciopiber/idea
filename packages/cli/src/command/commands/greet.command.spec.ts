import { TestingModule } from '@nestjs/testing';
import { CommandTestFactory } from 'nest-commander-testing';

describe('Task Command', () => {
  let commandInstance: TestingModule;

  beforeAll(async () => {
    commandInstance = await CommandTestFactory.createTestingCommand({
      imports: [],
    }).compile();
  });

  it('should call the "run" method', async () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    await CommandTestFactory.run(commandInstance, ['greet', 'Maurício']);

    expect(logSpy).toHaveBeenCalledWith('Hello, Maurício!');
    logSpy.mockRestore();
  });
});
