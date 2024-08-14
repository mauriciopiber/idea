import { InternalImport, Library } from './index';

describe('Test Library', () => {
  test('Test Hello World', () => {
    expect(Library()).toBe('NPM Library');
  });

  test('Test Internal Import', () => {
    expect(InternalImport).toBeInstanceOf(Function);
    expect(InternalImport).toBeDefined();
  });
});
