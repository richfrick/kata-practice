const {
  isOver40,
  getUserAge,
  getUserPetAge,
} = require('../katas/precourse/objects-katas');
describe('Objects Katas', () => {
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
  describe('Get User Age', () => {
    test('Is a function', () => {
      expect(typeof getUserAge).toBe('function');
    });
    test('does not change the input', () => {
      const input = { yearOfBirth: 1991 };
      getUserAge(input);

      expect(input).toEqual({ yearOfBirth: 1991 });
    });
    test('returns the age of the passed user object based on its yearOfBirth property', () => {
      const input = { yearOfBirth: 1991 };
      const result = getUserAge(input);

      expect(typeof result).toBe('number');
      expect(result).toBe(34);
    });
  });
  describe('Get user pet age', () => {
    const singleUser = {
      name: 'Carrie',
      age: 26,
      pet: {
        name: 'Pixie',
        age: 4,
        type: 'gremlin',
      },
    };

    test('Must be a function', () => {
      expect(typeof getUserPetAge).toBe('function');
    });
    test('Must not change input', () => {
      const result = getUserPetAge(singleUser);

      expect(typeof result).toBe('number');
      expect(singleUser).toEqual({
        name: 'Carrie',
        age: 26,
        pet: {
          name: 'Pixie',
          age: 4,
          type: 'gremlin',
        },
      });
    });
    test('Returns age of users pet when object only has 1 user', () => {
      const result = getUserPetAge(singleUser);
      expect(result).toBe(4);
    });
  });
});
