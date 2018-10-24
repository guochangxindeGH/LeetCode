/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort(function(a,b){
        return (a-b);
    });
    let ans;
    let diss = Number.MAX_VALUE;
    for (let i = 0; i < nums.length - 2; i ++) {
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            let ab = Math.abs(sum - target);
            if (ab < diss) {
                ans = sum;
                diss = ab;
            }
            if (sum < target) {
                j ++;
            } else if (sum > target) {
                k --;
            } else {
                return sum;
            }
        }
    }
    return ans;
};