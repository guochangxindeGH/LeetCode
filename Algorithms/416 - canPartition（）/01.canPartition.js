/**
 * 416. 分割等和子集
 * 给你一个 只包含正整数 的 非空 数组 nums 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。

 

示例 1：

输入：nums = [1,5,11,5]
输出：true
解释：数组可以分割成 [1, 5, 5] 和 [11] 。
示例 2：

输入：nums = [1,2,3,5]
输出：false
解释：数组不能分割成两个元素和相等的子集。

 * @param {number[]} nums
 * @return {boolean}
 */

/**
 * dp[i][0]=true
 * dp[0][nums[0]]=true  
 * 
 * 解释设置 dp[0][0] = true 的合理性（重点）
修改状态数组初始化的定义：dp[0][0] = true。考虑容量为 000 的时候，即 dp[i][0]。按照本意来说，应该设置为 false ，但是注意到状态转移方程（代码中）：
 dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i]];

 当 j - nums[i] == 0 成立的时候，根据上面分析，就说明单独的 nums[i] 这个数就恰好能够在被分割为单独的一组，其余的数分割成为另外一组。因此，我们把初始化的 dp[i][0] 设置成为 true 是没有问题的。

注意：观察状态转移方程，or 的结果只要为真，表格 这一列 下面所有的值都为真。因此在填表的时候，只要表格的最后一列是 true，代码就可以结束，直接返回 true。

 * // “&”运算符（位与）用于对两个二进制操作数逐位进行比较，并根据下表所示的换算表返回结果。
   * “&”运算符
      第一个数的位值	第二个数的位值	运算结果
          1	            1	          1
          1	            0	          0
          0	            1         	0
          0	            0	          0

      “|”运算符（位或）用于对两个二进制操作数逐位进行比较，并根据如表格所示的换算表返回结果。
      “|”运算符
      第一个数的位值	第二个数的位值	运算结果
            1	          1	          1
            1	          0	          1
            0	          1           1
            0	          0         	0
*/
var canPartition = function(nums) {
  const len = nums.length;
  if (len < 2) {
    return false;
  }
  let sum = 0, maxNum = 0;
  for (const num of nums) {
    sum += num;
    maxNum = num > maxNum ? num : maxNum;
  }
  if (sum & 1) { // sum % 2 !== 0
    return false;
  }
  const target = sum / 2;
  if (maxNum > target) {
    return false;
  }
  let res = new Array(len).fill(0).map(() => new Array(target + 1, false));
  for (let i = 0; i < len; i++) {
    res[i][0] = true;
  }
  res[0][nums[0]] = true;
  for (let i = 1; i < len; i ++) {
    for (let j = 1; j <= target; j ++) {
      if (j === nums[i]) {
        res[i][j] = true;
        continue;
      } else if (j > nums[i]) {
        res[i][j] = res[i - 1][j] | res[i - 1][j - nums[i]];
      } else {
        res[i][j] = res[i - 1][j];
      }
    }
  }
  return res[len - 1][target];
};

/**
 * 压缩到一维时，要采用逆序。dp[j] = dp[j] || dp[j - nums[i]] 
 * 可以理解为 dp[j] （新）= dp[j] （旧） || dp[j - nums[i]] （旧），
 * 如果采用正序的话 dp[j - nums[i]]会被之前的操作更新为新值
*/
var canPartition2 = function(nums) {
  const len = nums.length;
  if (len < 2) {
    return false;
  }
  let sum = 0, maxNum = 0;
  for (const num of nums) {
    sum += num;
    maxNum = num > maxNum ? num : maxNum;
  }
  if (sum & 1) { // sum % 2 !== 0
    return false;
  }
  const target = sum / 2;
  if (maxNum > target) {
    return false;
  }
  let res = new Array(target + 1).fill(false);
  res[0] = true;
  res[nums[0]] = true;
  for (let i = 1; i < len; i ++) {
    for (let j = target; j >= nums[i]; j --) {
      if (res[target]) {
        return true;
      }
      res[j] = res[j] || res[j - nums[i]];
    }
  }
  return res[target];
};

canPartition2([1,3,4,4]);