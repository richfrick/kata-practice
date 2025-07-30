const { isOver40 } = require('../katas/precourse/objects-katas');

describe('Is Over 40', () => {
  test('should be a function', () => {
    expect(typeof isOver40).toBe('function');
  });
  test('returns true if the user is over 40', () => {
    const result = isOver40({ age: 50 });
    expect(result).toBe(true);
  });
  test('returns false if the user is 40', () => {
    const result = isOver40({ age: 40 });
    expect(result).toBe(false);
  });
  test('returns false if the user is younger than 40', () => {
    const result = isOver40({ age: 20 });
    expect(result).toBe(false);
  });
  test('ignores other properties', () => {
    const result = isOver40('string');
    expect(result).toBe(false);
  });
});
