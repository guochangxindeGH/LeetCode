/**
 * 560. 和为 K 的子数组
 * 示例 1：

  给你一个整数数组 nums 和一个整数 k ，请你统计并返回 该数组中和为 k 的子数组的个数 。

  子数组是数组中元素的连续非空序列。

  输入：nums = [1,1,1], k = 2
  输出：2
  示例 2：

  输入：nums = [1,2,3], k = 3
  输出：2
  

  提示：

  1 <= nums.length <= 2 * 104
  -1000 <= nums[i] <= 1000
  -107 <= k <= 107

 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


// 此方法会超出时间限制
var subarraySum = function(nums, k) {
  let count = 0;
  for (let start = 0; start < nums.length; ++start) {
      let sum = 0;
      for (let end = start; end < nums.length; ++end) {
          sum += nums[end];
          if (sum == k) {
              count++;
          }
      }
  }
  return count;
};


// 引入一个map或者对象，记录所有的0~i的和集合，key为和，value为相同和的数量
let subarraySum2 = function(nums, k) {
  let map = { 0: 1};
  let count = 0, prefixSum = 0;
  for (let i = 0; i < nums.length; i ++) {
    prefixSum += nums[i];
    if (map[prefixSum - k]) {
      count += map[prefixSum - k];
    }

    if (map[prefixSum]) {
      map[prefixSum] += 1;
    } else {
      map[prefixSum] = 1;
    }
  }
  return count;
};

console.log(subarraySum2([-1,-1,1], 0));




/**
 * 复盘总结
  每个元素对应一个“前缀和”
  遍历数组，根据当前“前缀和”，在 map 中寻找「与之相减 == k」的历史前缀和
  当前“前缀和”与历史前缀和，差分出一个子数组，该历史前缀和出现过 c 次，就表示当前项找到 c 个子数组求和等于 k。
  遍历过程中，c 不断加给 count，最后返回 count
*/