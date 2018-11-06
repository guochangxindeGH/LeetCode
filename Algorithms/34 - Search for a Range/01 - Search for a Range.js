/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let i = 0, j = nums.length;
    let mid = parseInt((i + j) / 2);
    let p = -1;
    while (i < j) {
        if (nums[mid] == target) {
            p = mid;
            break;
        }
        if (nums[mid] > target) {
            if (j == mid) break;
            j = mid;
            mid = parseInt((i + j) / 2);
        } else {
            if (i == mid) break;
            i = mid;
            mid = parseInt((i + j) / 2);
        }

    }
    if (p == -1) {
        return [-1, -1];
    } else {
        let a = p, b = p;
        while (nums[b + 1] == target && b < nums.length - 1) {
            b ++;
        }
        while (nums[a - 1] == target) {
            a --;
        }
        return [a,b];
    }

};