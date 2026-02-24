const { add, multiply } = require('../src/calculator');

describe('Calculator Module', () => {
  describe('add(a, b)', () => {
    test('adds two positive numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
      expect(add(10, 20)).toBe(30);
      expect(add(0, 5)).toBe(5);
      expect(add(5, 0)).toBe(5);
    });

    test('throws error for negative first argument', () => {
      expect(() => add(-1, 3)).toThrow('Input must be non-negative numbers');
      expect(() => add(-10, 5)).toThrow('Input must be non-negative numbers');
    });

    test('throws error for negative second argument', () => {
      expect(() => add(3, -1)).toThrow('Input must be non-negative numbers');
      expect(() => add(5, -10)).toThrow('Input must be non-negative numbers');
    });

    test('throws error for non-number inputs', () => {
      expect(() => add('a', 3)).toThrow('Input must be non-negative numbers');
      expect(() => add(2, 'b')).toThrow('Input must be non-negative numbers');
      expect(() => add(null, 3)).toThrow('Input must be non-negative numbers');
      expect(() => add(2, undefined)).toThrow('Input must be non-negative numbers');
    });
  });

  describe('multiply(a, b)', () => {
    test('multiplies two positive numbers correctly', () => {
      expect(multiply(2, 3)).toBe(6);
      expect(multiply(10, 20)).toBe(200);
      expect(multiply(0, 5)).toBe(0);
      expect(multiply(5, 0)).toBe(0);
    });

    test('throws error for negative first argument', () => {
      expect(() => multiply(-1, 3)).toThrow('Input must be non-negative numbers');
      expect(() => multiply(-10, 5)).toThrow('Input must be non-negative numbers');
    });

    test('throws error for negative second argument', () => {
      expect(() => multiply(3, -1)).toThrow('Input must be non-negative numbers');
      expect(() => multiply(5, -10)).toThrow('Input must be non-negative numbers');
    });

    test('throws error for non-number inputs', () => {
      expect(() => multiply('a', 3)).toThrow('Input must be non-negative numbers');
      expect(() => multiply(2, 'b')).toThrow('Input must be non-negative numbers');
      expect(() => multiply(null, 3)).toThrow('Input must be non-negative numbers');
      expect(() => multiply(2, undefined)).toThrow('Input must be non-negative numbers');
    });
  });
});