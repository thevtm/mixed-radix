
import clone from "lodash.clone";

/**
 * Decodes mixed radix.
 * @param {number[]} bases - Mixed bases, must be an array integers.
 * @param {number[]} n - Values to decode, must be an integer.
 * @returns {number[]} - Decoded values.
 */
export function mrDecode(bases: number[], n: number): number[] {

  // Validate args
  if (n == null) {
    throw new Error(`Invalid parameter: "n" must not be null / undefined.`);
  }

  // Decode
  return clone(bases).reverse().map((base) => {
    const r = n % base;
    n = Math.floor(n / base);

    return r;
  }).reverse();
}
