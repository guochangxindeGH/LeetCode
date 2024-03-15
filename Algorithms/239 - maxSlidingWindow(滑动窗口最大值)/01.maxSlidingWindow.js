/**
 * 239. 滑动窗口最大值
 * 示例 1：

  输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
  输出：[3,3,5,5,6,7]
  解释：
  滑动窗口的位置                最大值
  ---------------               -----
  [1  3  -1] -3  5  3  6  7       3
  1 [3  -1  -3] 5  3  6  7       3
  1  3 [-1  -3  5] 3  6  7       5
  1  3  -1 [-3  5  3] 6  7       5
  1  3  -1  -3 [5  3  6] 7       6
  1  3  -1  -3  5 [3  6  7]      7
  示例 2：

  输入：nums = [1], k = 1
  输出：[1]
  

  提示：

  1 <= nums.length <= 105
  -104 <= nums[i] <= 104
  1 <= k <= nums.length

 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// 时间过长
var maxSlidingWindow = function(nums, k) {
  let arr  = [], res = [];
  for (let i = 0; i < nums.length; i ++) {
    arr.push(nums[i]);
    if (arr.length === k) {
      res.push(Math.max.apply(null, arr));
      arr.shift();
    }
  }
  return res;
};

// 写了，但是没完全理解
let maxSlidingWindow2 = function(nums, k) {
  const n = nums.length;
  const q = [];
  for (let i = 0; i < k; i++) {
      while (q.length && nums[i] >= nums[q[q.length - 1]]) {
          q.pop();
      }
      q.push(i);
  }
  const ans = [nums[q[0]]];
  for (let i = k; i < n; i++) {
    debugger;
    while (q.length && nums[i] >= nums[q[q.length - 1]]) {
        q.pop();
    }
    q.push(i);
    while (q[0] <= i - k) {
        q.shift();
    }
    ans.push(nums[q[0]]);
  }
  return ans;
};

console.log(maxSlidingWindow2([1,3,-1,-3,5,3,6,7], 3));