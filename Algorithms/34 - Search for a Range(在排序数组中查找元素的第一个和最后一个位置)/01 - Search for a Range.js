/**
 * 34. 在排序数组中查找元素的第一个和最后一个位置
 * 给你一个按照非递减顺序排列的整数数组 nums，和一个目标值 target。请你找出给定目标值在数组中的开始位置和结束位置。

如果数组中不存在目标值 target，返回 [-1, -1]。

你必须设计并实现时间复杂度为 O(log n) 的算法解决此问题。

 

示例 1：

输入：nums = [5,7,7,8,8,10], target = 8
输出：[3,4]
示例 2：

输入：nums = [5,7,7,8,8,10], target = 6
输出：[-1,-1]
示例 3：

输入：nums = [], target = 0
输出：[-1,-1]
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let i = 0, j = nums.length;
    let p = -1;
    while (i <= j) {
        let mid = parseInt((i + j) / 2);
        if (nums[mid] == target) {
            p = mid;
            break;
        }
        if (nums[mid] > target) {
            j = mid - 1;
        } else {
            i = mid + 1;
        }

    }
    if (p == -1) {
        return [-1, -1];
    } else {
        let a = p, b = p;
        while (b < nums.length - 1 && nums[b + 1] == target) {
            b ++;
        }
        while (a > 0 && nums[a - 1] == target) {
            a --;
        }
        return [a,b];
    }
};