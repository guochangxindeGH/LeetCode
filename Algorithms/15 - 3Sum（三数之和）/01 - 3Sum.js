/**
 * 三数之和
 * 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请

    你返回所有和为 0 且不重复的三元组。

    注意：答案中不可以包含重复的三元组。
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

var threeSum2 = function(nums) {
    if (!nums || nums.length < 3) {
        return [];
    }
    const newNums = nums.sort((a, b) => {
        return a - b;
    });
    const len = newNums.length;
    if ((newNums[0] + newNums[1] + newNums[2]) > 0 || (newNums[len - 1] + newNums[len - 2] + newNums[len - 3]) < 0) {
        return [];
    }
    let res = [];
    for (let i = 0; i < len; i ++) {
        if (i > 0 && newNums[i] === newNums[i - 1]) {
            continue;
        }
        let j = i + 1, k = len - 1;
        while (j < k) {
            if (newNums[i] + newNums[j] + newNums[k] < 0) {
                j += 1;
            } else if (newNums[i] + newNums[j] + newNums[k] > 0) {
                k -= 1;
            } else {
                res.push([newNums[i], newNums[j], newNums[k]]);
                while (j < k && newNums[j] === newNums[j + 1]) {
                    j += 1;
                }
                while (k > j && newNums[k] === newNums[k - 1]) {
                    k -= 1;
                }
                j += 1, k -= 1;
            }
        }
    }
    return res;
};

console.log(threeSum2([-1,0,1,2,-1,-4]));