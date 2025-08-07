const {
  areValuesEqual,
  areNotEqualTo,
  isFromThe60s,
} = require('../katas/precourse/conditional-logic-katas');

describe('Precourse Conditional Logic Katas', () => {
  describe('Are these values equal', () => {
    test('should be a function', () => {
      expect(typeof areValuesEqual).toBe('function');
    });
    test('should return true when passed two identical numbers', () => {
      const result = areValuesEqual(1, 1);
      expect(result).toBe(true);
    });
    test('should return true when passed two identical strings', () => {
      const result = areValuesEqual('hello', 'hello');
      expect(result).toBe(true);
    });
    test('should return true when comparing the same array', () => {
      const arr = [1, 'hello'];
      const result = areValuesEqual(arr, arr);
      expect(result).toBe(true);
    });
    test('should return false when inputs are different data types', () => {
      const result = areValuesEqual(1, '1');
      expect(result).toBe(false);
    });
    test('should return false when comparing two different arrays', () => {
      const result = areValuesEqual([1, 'hello'], [1, 'hello']);
      expect(result).toBe(false);
    });
  });
  describe('Values are not equal to', () => {
    test('Is a function', () => {
      expect(typeof areNotEqualTo).toBe('function');
    });
    test('equal values of different types return true', () => {
      const result = areNotEqualTo(1, '1');
      expect(result).toBe(true);
    });
    test('should return true when comparing two different arrays', () => {
      const result = areNotEqualTo([], []);
      expect(result).toBe(true);
    });
    test('should return false when comparing the same value', () => {
      const result = areNotEqualTo(true, true);
      expect(result).toBe(false);
    });
    test('should return false when comparing the same array', () => {
      const arr1 = [1, 2, 3];
      const result = areNotEqualTo(arr1, arr1);
      expect(result).toBe(false);
    });
  });
  describe("Is it from the 60's", () => {
    test('Is a function', () => {
      expect(typeof isFromThe60s).toBe('function');
    });
    test('Does not alter the input', () => {
      const input = 1982;
      isFromThe60s(input);
      expect(input).toBe(1982);
    });
    test('should return true when passed a year between 1960 and 1969 inclusive', () => {
      const result = isFromThe60s(1968);
      expect(result).toBe(true);
    });
    test('should return false when passed a year after 1969', () => {
      const result = isFromThe60s(1982);
      expect(result).toBe(false);
    });
    test('should return false when passed a year before 1960', () => {
      const result = isFromThe60s(1958);
      expect(result).toBe(false);
    });
    test('should return false when passed a year during the 60s not in the 20th century', () => {
      const result = isFromThe60s(1868);
      expect(result).toBe(false);
    });
    test('using a non number returns false', () => {
      const result = isFromThe60s('1968');
      expect(result).toBe(false);
    });
  });
});
