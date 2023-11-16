import {describe, expect, test} from "bun:test";
import {longestCommonPrefix} from "../index.ts";

describe('longestCommonPrefix', () => {
    test.each([
        [["flower", "flow", "flight"], "fl"],
        [["dog", "racecar", "car"], ""]
    ])('finds common prefix for %s', (input, expected) => {
        expect(longestCommonPrefix(input)).toBe(expected);
    });
});
