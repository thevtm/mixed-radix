
import { mrDecode } from "./decode";

describe("decode", () => {

  it("expect mrDecode nominal behaviour", () => {

    expect(mrDecode([10], 0)).toEqual([0]);
    expect(mrDecode([10], 3)).toEqual([3]);
    expect(mrDecode([10], 10)).toEqual([0]);

    expect(mrDecode([2, 3], 0)).toEqual([0, 0]);
    expect(mrDecode([2, 3], 1)).toEqual([0, 1]);
    expect(mrDecode([2, 3], 3)).toEqual([1, 0]);
    expect(mrDecode([2, 3], 4)).toEqual([1, 1]);
    expect(mrDecode([2, 3], 5)).toEqual([1, 2]);
    expect(mrDecode([2, 3], 6)).toEqual([0, 0]);
    expect(mrDecode([2, 3], 9)).toEqual([1, 0]);

    expect(mrDecode([4, 6], 3)).toEqual([0, 3]);
    expect(mrDecode([4, 6], 14)).toEqual([2, 2]);

    expect(mrDecode([3, 3, 2], 0)).toEqual([0, 0, 0]);
    expect(mrDecode([3, 3, 2], 5)).toEqual([0, 2, 1]);
    expect(mrDecode([3, 3, 2], 7)).toEqual([1, 0, 1]);
    expect(mrDecode([3, 3, 2], 11)).toEqual([1, 2, 1]);
    expect(mrDecode([3, 3, 2], 17)).toEqual([2, 2, 1]);

  });

  it("expect mrDecode to throw when it recieves null / undefined", () => {

    // undefined
    expect(() => mrDecode(undefined, undefined)).toThrow();
    expect(() => mrDecode(undefined, 13)).toThrow();
    expect(() => mrDecode([1, 3], undefined)).toThrow();

    // null
    expect(() => mrDecode(null, null)).toThrow();
    expect(() => mrDecode(null, 13)).toThrow();
    expect(() => mrDecode([1, 3], null)).toThrow();

  });

});
