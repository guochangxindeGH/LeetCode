/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (nums.length == 0) {
        return -1;
    }
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        let mid = parseInt((left + right) / 2);
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] < nums[right]) {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else {
            if (nums[mid] > target && target >= nums[left]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
    return -1;
};