const { getLength } = require('../katas/precourse/string-katas');

describe.only('String Katas', () => {
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
