const {
  getEvenNumbers,
  getItemsLongerThan,
} = require('../katas/precourse/array-katas');

describe('Array Katas', () => {
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
  describe('Get items longer than', () => {
    test('Should be a function', () => {
      expect(typeof getItemsLongerThan).toBe('function');
    });
    test('Should return a new array', () => {
      const input = ['qqq', 'rrrrr', 'ppppppppp', 'vvv', 'dd'];
      const result = getItemsLongerThan(input, 2);

      expect(result).not.toBe(input);
    });
    test('Should not update input', () => {
      const input = ['qqq', 'rrrrr', 'ppppppppp', 'vvv', 'dd'];
      const inputClone = [...input];

      const result = getItemsLongerThan(input, 2);

      expect(result).not.toBe(input);
      expect(input).toEqual(inputClone);
    });
    test('should return an array with identical elements if all of the items in the array are longer than the passed length', () => {
      const input = ['qqq', 'rrrrr', 'ppppppppp', 'vvv', 'dd'];
      const result = getItemsLongerThan(input, 1);

      expect(result).toEqual(input);
    });
    test('should return an array of items in the passed array that are longer than the passed length', () => {
      const input = ['qqq', 'rrrrr', 'ppppppppp', 'vvv', 'dd'];
      const result = getItemsLongerThan(input, 3);

      expect(result).toEqual(['rrrrr', 'ppppppppp']);
    });
    test('should return an empty array if none of the items in the array are longer than the passed length', () => {
      const input = [];
      const result = getItemsLongerThan(input, 3);

      expect(input).not.toBe(result);
      expect(result).toEqual([]);
    });
  });
});
