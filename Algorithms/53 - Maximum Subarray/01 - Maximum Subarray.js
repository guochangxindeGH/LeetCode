/**
 * @param {number[]} nums
 * @return {number}
 */

//此为动态规划法
var maxSubArray = function(nums) {
    if (nums.length == 1) {
        return nums[0]
    }
    let sum = []
    sum[0] = nums[0]
    let max = sum[0]
    for (let i = 1; i < nums.length; i++) {
        sum[i] = Math.max(sum[i - 1] + nums[i], nums[i])
        if (max < sum[i]) {
            max = sum[i]
        }
    }
    return max


};