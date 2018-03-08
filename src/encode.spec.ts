import { mrEncode } from "./encode";

describe("decode", () => {

  it("expect mrEncode nominal behaviour", () => {

    expect(mrEncode([10], [0])).toEqual(0);
    expect(mrEncode([10], [3])).toEqual(3);
    expect(mrEncode([10], [10])).toEqual(10);

    expect(mrEncode([2, 3], [0, 0])).toEqual(0);
    expect(mrEncode([2, 3], [0, 1])).toEqual(1);
    expect(mrEncode([2, 3], [1, 0])).toEqual(3);
    expect(mrEncode([2, 3], [1, 1])).toEqual(4);
    expect(mrEncode([2, 3], [1, 2])).toEqual(5);

    expect(mrEncode([4, 6], [0, 3])).toEqual(3);
    expect(mrEncode([4, 6], [2, 2])).toEqual(14);

    expect(mrEncode([3, 3, 2], [0, 0, 0])).toEqual(0);
    expect(mrEncode([3, 3, 2], [0, 2, 1])).toEqual(5);
    expect(mrEncode([3, 3, 2], [1, 0, 1])).toEqual(7);
    expect(mrEncode([3, 3, 2], [1, 2, 1])).toEqual(11);
    expect(mrEncode([3, 3, 2], [2, 2, 1])).toEqual(17);

  });

  it("expect mrEncode to throw when bases and values length is not equal", () => {

    expect(() => mrEncode([1, 2], [])).toThrow();
    expect(() => mrEncode([], [1, 2])).toThrow();

  });

  it("expect mrEncode to throw when it recieves null / undefined", () => {

    // undefined
    expect(() => mrEncode(undefined, undefined)).toThrow();
    expect(() => mrEncode(undefined, [13])).toThrow();
    expect(() => mrEncode([1, 3], undefined)).toThrow();

    // null
    expect(() => mrEncode(null, null)).toThrow();
    expect(() => mrEncode(null, [13])).toThrow();
    expect(() => mrEncode([1, 3], null)).toThrow();

  });

});
