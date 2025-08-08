const {
  getLength,
  putNamesTogether,
  capitaliseString,
} = require('../katas/precourse/string-katas');

describe('String Katas', () => {
  describe('Return string length', () => {
    test('should be a function', () => {
      expect(typeof getLength).toBe('function');
    });
    test('should return 0 for an empty string', () => {
      const result = getLength('');
      expect(result).toBe(0);
    });
    test('should return the correct value for a short string', () => {
      const result = getLength('1234qwerty');
      expect(result).toBe(10);
    });
    test('should return the correct value for a longer string', () => {
      const result = getLength('Hello this is a test. or is it!');
      expect(result).toBe(31);
    });
  });
  describe('Joining Names Together', () => {
    test('should be a function', () => {
      expect(typeof putNamesTogether).toBe('function');
    });
    test('should return a full name including firstName', () => {
      const result = putNamesTogether('foo', 'bar');
      expect(result).toMatch(/^foo/);
    });
    test('should return a full name including secondName', () => {
      const result = putNamesTogether('foo', 'bar');
      expect(result).toMatch(/bar$/);
    });
    test('should return names separated by a space', () => {
      const result = putNamesTogether('foo', 'bar');
      expect(result).toMatch(/^(\w+) (\w+)$/);
    });
    test('should return correct full name', () => {
      const result = putNamesTogether('foo', 'bar');
      expect(result).toBe('foo bar');
    });
  });
  describe('Capitalisation on strings', () => {
    test('should be a function', () => {
      expect(typeof capitaliseString).toBe('function');
    });
    test('does not change the input', () => {
      const input = 'test';
      capitaliseString(input);
      expect(input).toBe('test');
    });
    test('works with a single character string', () => {
      const input = 'a';
      const result = capitaliseString(input);
      expect(result).toBe('A');
    });
    test('works with a whole word', () => {
      const input = 'test';
      const result = capitaliseString(input);
      expect(result).toBe('Test');
    });
    test('works with a works with a sentence', () => {
      const input = 'this is a test';
      const result = capitaliseString(input);
      expect(result).toBe('This is a test');
    });
    test('ignores non string inputs', () => {
      const input = 1;
      const result = capitaliseString(input);
      expect(result).toBe(undefined);
    });
  });
});
