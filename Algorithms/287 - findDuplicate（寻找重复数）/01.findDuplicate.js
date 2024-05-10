/**
 * 287. 寻找重复数
 * 给定一个包含 n + 1 个整数的数组 nums ，其数字都在 [1, n] 范围内（包括 1 和 n），可知至少存在一个重复的整数。

假设 nums 只有 一个重复的整数 ，返回 这个重复的数 。

你设计的解决方案必须 不修改 数组 nums 且只用常量级 O(1) 的额外空间。
示例 1：

输入：nums = [1,3,4,2,2]
输出：2
示例 2：

输入：nums = [3,1,3,4,2]
输出：3
示例 3 :

输入：nums = [3,3,3,3,3]
输出：3
 
 * @param {number[]} nums
 * @return {number}
 */
/**
 * 二分查找法
 * 在 1 ~ n+1 个数中，小于等于下标值i（i从1开始）的数理论上为i个，如果小于i说明较大的数（ > i 的数）重复，如果大于i说明较小的数（ < i 的数）重复
*/
var findDuplicate = function(nums) {
  const n = nums.length;
  let l = 1, r = n - 1, ans = -1;
  while (l <= r) {
      let mid = (l + r) >> 1;
      let cnt = 0;
      for (let i = 0; i < n; ++i) {
          cnt += nums[i] <= mid;
      }
      if (cnt <= mid) {
          l = mid + 1;
      } else {
          r = mid - 1;
          ans = mid;
      }
  }
  return ans;
};

/**
 * 快慢指针，本方法需要读者对 「Floyd 判圈算法」（又称龟兔赛跑算法）有所了解，它是一个检测链表是否有环的算法，LeetCode 中相关例题有 141. 环形链表，142. 环形链表 II。
 * 我们对 nums 数组建图，每个位置 i 连一条 i→nums[i] 的边。由于存在的重复的数字 target，因此 target 这个位置一定有起码两条指向它的边，因此整张图一定存在环，且我们要找到的 target 就是这个环的入口，那么整个问题就等价于 142. 环形链表 II。
我们先设置慢指针 slow 和快指针 fast ，慢指针每次走一步，快指针每次走两步，根据「Floyd 判圈算法」两个指针在有环的情况下一定会相遇，此时我们再将 slow 放置起点 000，两个指针每次同时移动一步，相遇的点就是答案。
*/
var findDuplicate = function(nums) {
  let slow = 0, fast = 0;
  while (true) {
    slow = nums[slow];
    fast = nums[nums[fast]]
    if (slow === fast) {
      break;
    }
  }
  slow = 0;
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
}

findDuplicate([1,3,4,2,2]);