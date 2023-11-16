import {describe, expect, it} from "bun:test";
import {findTwoSum} from "../index.ts";

describe('findTwoSum', () => {
    it('finds indices for nums = [2, 7, 11, 15] and target = 9', () => {
        expect(findTwoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
    });

    it('finds indices for nums = [3, 2, 4] and target = 6', () => {
        expect(findTwoSum([3, 2, 4], 6)).toEqual([1, 2]);
    });

    it('finds indices for nums = [3, 3] and target = 6', () => {
        expect(findTwoSum([3, 3], 6)).toEqual([0, 1])
    });
    it("finds indices for nums = [3,2,3] and target = 6", () => {
        expect(findTwoSum([3,2,3], 6)).toEqual([0,2])
    })
});
