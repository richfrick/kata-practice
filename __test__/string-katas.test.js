const {
  getLength,
  putNamesTogether,
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
});
