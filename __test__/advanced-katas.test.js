const {
  flipBooleans,
  translateKey,
} = require('../katas/precourse/advanced-katas');

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
  describe('Translate key values', () => {
    test('Should be a function', () => {
      expect(typeof translateKey).toBe('function');
    });
    test('Returns a new object', () => {
      const input = {
        prénom: 'Carla',
        surname: 'Bruni',
        job: 'Artist',
      };
      const result = translateKey(input, 'prénom', 'firstname');
      expect(result).not.toBe(input);
      expect(result).not.toEqual(input);
    });
    test('does not alter the input', () => {
      const input = {
        prénom: 'Carla',
        surname: 'Bruni',
        job: 'Artist',
      };
      translateKey(input, 'prénom', 'firstname');
      expect(input).toEqual({
        prénom: 'Carla',
        surname: 'Bruni',
        job: 'Artist',
      });
    });
    test('removes and adds the correct key from the response object', () => {
      const input = {
        prénom: 'Carla',
        surname: 'Bruni',
        job: 'Artist',
      };
      const result = translateKey(input, 'prénom', 'firstname');
      expect(result['prénom']).toBeFalsy();
      expect(result['firstname']).toBeTruthy();
    });
    test('returns the student with the correct information', () => {
      const input = {
        prénom: 'Carla',
        surname: 'Bruni',
        job: 'Artist',
      };
      const result = translateKey(input, 'prénom', 'firstname');
      expect(result).toEqual({
        firstname: 'Carla',
        surname: 'Bruni',
        job: 'Artist',
      });
    });
  });
});
