import {describe, expect, it} from "bun:test";
import {isPalindrome} from "../index.ts";

describe('isPalindrome', () => {
    it.each([
        [121, true],
        [-121, false],
        [10, false]
    ])('returns correct result for %i', (input, expected) => {
        expect(isPalindrome(input)).toBe(expected);
    });
});
