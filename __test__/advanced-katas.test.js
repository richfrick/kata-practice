const { flipBooleans } = require('../katas/precourse/advanced-katas');

describe('Flipping Booleans', () => {
  test('Should be a function', () => {
    expect(typeof flipBooleans).toBe('function');
  });
  test('should return a new array', () => {
    const input = [];
    const result = flipBooleans(input);
    expect(Array.isArray(result)).toBe(true);
    expect(result).not.toBe(input);
  });
  test('should return an array of all true values when passed an array of all false values', () => {
    const input = [false, false, false];
    const result = flipBooleans(input);
    expect(result).toEqual([true, true, true]);
  });
  test('should return an array of all false values when passed an array of all true values', () => {
    const input = [true, true, true];
    const result = flipBooleans(input);
    expect(result).toEqual([false, false, false]);
  });
  test('should return an array of completely flipped boolean values', () => {
    const input = [true, false, true, false];
    const result = flipBooleans(input);
    expect(result).toEqual([false, true, false, true]);
  });
  test('should return an empty array when passed no booleans', () => {
    const input = [1, 2, 3, 'a'];
    const result = flipBooleans(input);
    expect(result).toEqual([]);
  });
});
