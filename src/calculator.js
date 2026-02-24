/**
 * Adds two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 * @throws {Error} If inputs are not non-negative numbers
 */
function add(a, b) {
  // Input validation: check if both parameters are numbers and non-negative
  if (typeof a !== 'number' || typeof b !== 'number' || a < 0 || b < 0) {
    throw new Error('Input must be non-negative numbers');
  }
  return a + b;
}

/**
 * Multiplies two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 * @throws {Error} If inputs are not non-negative numbers
 */
function multiply(a, b) {
  // Input validation: check if both parameters are numbers and non-negative
  if (typeof a !== 'number' || typeof b !== 'number' || a < 0 || b < 0) {
    throw new Error('Input must be non-negative numbers');
  }
  return a * b;
}

// Export functions for module usage
module.exports = { add, multiply };
