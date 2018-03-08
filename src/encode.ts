
/**
 * Encodes using mixed radix.
 * @param {number[]} bases - Mixed bases, must be integers.
 * @param {number[]} ns - Values to encode, must be an array of integer with
 * the same length as bases.
 * @returns {number} - Encoded values.
 */
export function mrEncode(bases: number[], ns: number[]): number {

  // Validate args
  if (bases.length !== ns.length) {
    throw new Error(`Invalid parameter: "bases" and "ns" must have the same length.
      bases: "${bases}" ns: "${ns}"`);
  }

  // Encode
  let baseAcc = 1;

  return bases.reduceRight((acc, base, index) => {
    const r = acc + (baseAcc * ns[index]);
    baseAcc = baseAcc * base;

    return r;
  }, 0);

}
