/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let ans = 0;
    for (let i = nums.length - 1; i >= 0; i --) {
        if (i == nums.length - 1) {
            ans ++;
        } else if (nums[i] == nums[i + 1])  {
            nums.splice(i,1);
        } else {
            ans ++;
        }
    }
    return ans;
};