import {describe, expect, it} from "bun:test";
import {romanToInt} from "../index.ts";

describe('romanToInt', () => {
    it.each([
        ["III", 3],
        ["LVIII", 58],
        ["MCMXCIV", 1994]
    ])('returns correct result for %i', (input, expected) => {
        expect(romanToInt(input)).toBe(expected);
    });
});
