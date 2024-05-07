/**
 * 300. 最长递增子序列
 * 
 * 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的
子序列
。

 
示例 1：

输入：nums = [10,9,2,5,3,7,101,18]
输出：4
解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
示例 2：

输入：nums = [0,1,0,3,2,3]
输出：4
示例 3：

输入：nums = [7,7,7,7,7,7,7]
输出：1

 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  let res = new Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i ++) {
    for (let j = 0; j < i; j ++) {
      if (nums[j] < nums[i]) {
        res[i] = Math.max(res[i], res[j] + 1);
      }
    }
  }
  return Math.max(...res);
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS1 = function(nums) {

  if (nums.length === 0) return 0
  // 原数组第 0 项
  const tails = [nums[0]]

  for (let i = 1; i< nums.length; i++) {
      if (nums[i] > tails[tails.length - 1]) {
          tails.push(nums[i])
      } else {
          const index = tails.findIndex(x => x >= nums[i])// getFirstGreaterIndex(nums[i])
          tails[index] = nums[i]
      }
  }

  return tails.length
};


// 这种方案跟上面是一样的，只是把findIndex()换成了二分查找
var lengthOfLIS2 = function (nums) {
  const n = nums.length
  if (!n) return 0
  const arr = [nums[0]]
  for (let i = 1; i < n; i++) {
      if (nums[i] > arr[arr.length - 1]) {
          arr.push(nums[i])
      } else {
          let left = 0, right = arr.length - 1
          let pos = 0
          while (left <= right) {
              const mid = left + Math.floor((right - left) / 2)
              if (arr[mid] >= nums[i]) {
                  pos = mid
                  right = mid - 1
              } else {
                  left = mid + 1
              }
          }
          arr[pos] = nums[i]
      }
  }
  return arr.length
};
lengthOfLIS2([10,9,3,5,2,7,101,18]);