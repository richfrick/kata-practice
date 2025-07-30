const {
  modulo,
  squareRoot,
  raiseToPower,
  formatMoney,
  calculateCircleArea,
  calculateFullTurns,
} = require('../katas/precourse/maths-katas');

describe('Precourse Mats Katas', () => {
  describe('Modulo', () => {
    test('Should be a function', () => {
      expect(typeof modulo).toBe('function');
    });
    test('should return the square root of n when square root is a whole integer', () => {
      const result = modulo(1, 2);
      expect(result).toBe(1);
    });
    test('should return the square root of n when square root is a whole integer', () => {
      const result = modulo(13, 5);
      expect(result).toBe(3);
    });
    test('should return the square root of n when square root is not a whole integer', () => {
      const result = modulo(12.75, 2.5);
      expect(result).toBe(0.25);
    });
  });
  describe('Square root', () => {
    test('should be a function', () => {
      expect(typeof squareRoot).toBe('function');
    });
    test('should return the square root of n when square root is a whole integer', () => {
      const result = squareRoot(4);
      expect(result).toBe(2);
    });
    test('should return the square root of n when square root is not a whole integer', () => {
      const result = squareRoot(10);
      expect(result).toBe(3.1622776601683795);
    });
  });

  describe('Raise To Power', () => {
    test('Should be a function', () => {
      expect(typeof raiseToPower).toBe('function');
    });
    test('should m to the nth power', () => {
      const result = raiseToPower(2, 3);
      expect(result).toBe(8);
    });
    test('should return 1 when n is zero', () => {
      const result = raiseToPower(2, 0);
      expect(result).toBe(1);
    });
  });

  describe('Format Money', () => {
    test('Should be a function', () => {
      expect(typeof formatMoney).toBe('function');
    });
    test('should return a string that begins with "£"', () => {
      const result = formatMoney(2.99);
      expect(result[0]).toBe('£');
    });
    test('should add zeroes up to 2 decimal places', () => {
      const result = formatMoney(1);
      expect(result).toBe('£1.00');
    });
    test('should round to 2 decimal places', () => {
      const result = formatMoney(2.987654321);
      expect(result).toBe('£2.99');
    });
  });

  describe('Calculate Circle Area', () => {
    test('Should be a function', () => {
      expect(typeof calculateCircleArea).toBe('function');
    });
    test('should return a number', () => {
      const result = calculateCircleArea(12);
      expect(typeof result).toBe('number');
    });
    test('should return the area of a circle with radius "r" to 3 decimal places', () => {
      const result = calculateCircleArea(12);
      expect(result).toEqual(452.389);
    });
    test('should return the area of a circle with radius "r" to 3 decimal places', () => {
      const result = calculateCircleArea(1);
      expect(result).toEqual(3.142);
    });
  });
  describe('Calculate the number of full turns from an input of degrees', () => {
    test('should be a function', () => {
      expect(typeof calculateFullTurns).toBe('function');
    });
    test('should return 0 if given degress less than 360', () => {
      const result = calculateFullTurns(10);
      expect(result).toBe(0);
    });
    test('should return 1 if given 360 degrees', () => {
      const result = calculateFullTurns(360);
      expect(result).toBe(1);
    });
    test('should return correct number of full turns as a whole number', () => {
      const result = calculateFullTurns(360);
      expect(Number.isInteger(result)).toBe(true);
    });
    test('should return correct number of full turns as a whole number for multiple full turns', () => {
      const result = calculateFullTurns(1500);
      expect(result).toBe(4);
    });
  });
});
