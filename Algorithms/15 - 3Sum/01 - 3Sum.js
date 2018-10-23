/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort(function(a,b){
        return a-b});
    let item = [], itemArry = [];
    for (let i = 0; i < nums.length; i ++) {
        if (nums[i] > 0) {
            break;
        }
        // 如果两个数字相同，我们直接跳到下一个循环。
        if (i > 0 && nums[i] == nums[i-1]) {
            continue;
        }
        let target = 0 - nums[i];
        let j = i + 1, k = nums.length - 1;
        while (j < k) {
            if (nums[j] + nums[k] == target) {
                item.push(nums[i]);
                item.push(nums[j]);
                item.push(nums[k]);
                itemArry.push(item);
                item = [];

                while (j < k && nums[j] == nums[j+1]) {
                    j = j + 1;
                }
                while (j < k && nums[k] == nums[k-1]) {
                    k = k - 1;
                }
                j = j + 1, k = k - 1;
            } else if (nums[j] + nums[k] < target) {
                j +=1;
            } else {
                k -=1;
            }
        }
    }
    return itemArry;

};