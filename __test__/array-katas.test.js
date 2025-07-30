const { getEvenNumbers } = require('../katas/precourse/array-katas');

describe('Get Even Numbers', () => {
  test('should be a function', () => {
    expect(typeof getEvenNumbers).toBe('function');
  });
  test('should return an empty array if no even numbers in the passed array', () => {
    const input = [];
    const result = getEvenNumbers(input);
    expect(result.length).toEqual(0);
    expect(result).not.toBe(input);
    expect(result).toEqual([]);
  });
  test('should return an array of single even number in the passed array', () => {
    const input = [3, 5, 7, 2];
    const result = getEvenNumbers(input);
    expect(result.length).toEqual(1);
    expect(result).not.toBe(input);
    expect(result).toEqual([2]);
  });
  test('should return an array of multiple even numbers in the passed array', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const result = getEvenNumbers(input);
    expect(result.length).toEqual(5);
    expect(result).not.toBe(input);
    expect(result).toEqual([2, 4, 6, 8, 0]);
  });
});
