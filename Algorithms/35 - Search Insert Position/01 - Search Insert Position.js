/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let i = 0, j = nums.length - 1;
    while (i <= j) {
        let mid = parseInt((i + j) / 2);
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] > target) {
            j = mid - 1;
            mid = parseInt((i + j) / 2);
        } else {
            i = mid + 1;
            mid = parseInt((i + j) / 2);
        }
    }
    for (let i; i <nums.length -1; i ++) {
        if (nums[i] > target) {
            break;
        }
    }
    return i;
};