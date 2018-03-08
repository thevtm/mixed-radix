
import { mrEncode, mrDecode } from "../../src";

describe("E2E Encode/Decode", () => {

  it("expect encode decode cycle to work", () => {

    const baseA = [42];
    expect(mrEncode(baseA, mrDecode(baseA, 0))).toBe(0);
    expect(mrEncode(baseA, mrDecode(baseA, 13))).toBe(13);
    expect(mrEncode(baseA, mrDecode(baseA, 41))).toBe(41);

    const baseB = [4, 6];
    expect(mrEncode(baseB, mrDecode(baseB, 5))).toBe(5);
    expect(mrEncode(baseB, mrDecode(baseB, 14))).toBe(14);
    expect(mrEncode(baseB, mrDecode(baseB, 20))).toBe(20);

    const baseC = [3, 6, 5];
    expect(mrEncode(baseC, mrDecode(baseC, 1))).toBe(1);
    expect(mrEncode(baseC, mrDecode(baseC, 36))).toBe(36);
    expect(mrEncode(baseC, mrDecode(baseC, 55))).toBe(55);
    expect(mrEncode(baseC, mrDecode(baseC, 86))).toBe(86);

    const baseD = [3, 6, 4, 3, 9, 16, 6];
    expect(mrEncode(baseD, mrDecode(baseD, 0))).toBe(0);
    expect(mrEncode(baseD, mrDecode(baseD, 665))).toBe(665);
    expect(mrEncode(baseD, mrDecode(baseD, 6548))).toBe(6548);
    expect(mrEncode(baseD, mrDecode(baseD, 186623))).toBe(186623);

    const baseE = [31, 63, 45, 37, 94, 16, 63];
    expect(mrEncode(baseE, mrDecode(baseE, 1000))).toBe(1000);
    expect(mrEncode(baseE, mrDecode(baseE, 66554665))).toBe(66554665);
    expect(mrEncode(baseE, mrDecode(baseE, 38109342240))).toBe(38109342240);
    expect(mrEncode(baseE, mrDecode(baseE, 308109342239))).toBe(308109342239);

  });

});
