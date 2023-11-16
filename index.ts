export function findTwoSum(nums: number[], target: number) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const comp = target - nums[i];
        if (map.has(comp)) {
            return [map.get(comp), i]
        }
        map.set(nums[i], i)
    }
}

export function isPalindrome(x: number): boolean {
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let reversed = 0;
    while (x > reversed) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return x === reversed || x === Math.floor(reversed / 10);
}

export function romanToInt(s: string): number {
    const map = new Map<string, number>([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000],
    ])
    let total = 0;
    let prev = 0;


    for (let i = s.length - 1; i >= 0; i--) {
        let curr = map.get(s[i]) as number
        if (curr < prev) {
            total -= curr
        } else {
            total += curr
        }
        prev = curr
    }
    return total
}


export function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return "";

    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while(strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length -1);
            if (prefix === "") return "";
        }
    }
    return prefix;
}

