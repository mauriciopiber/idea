import { GetRandomNumber, InternalImport } from './utils';

describe('Test Utils', () => {
  test('Test Internal Import', () => {
    expect(InternalImport()).toBe('Internal Import');
  });

  test('Get Random Number', () => {
    const randomNumber = GetRandomNumber();
    expect(randomNumber).toBeGreaterThanOrEqual(0);
    expect(randomNumber).toBeLessThanOrEqual(1);
  });
});
