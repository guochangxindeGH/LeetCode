/**
 * 322. 零钱兑换
 * 
 * 给你一个整数数组 coins ，表示不同面额的硬币；以及一个整数 amount ，表示总金额。

计算并返回可以凑成总金额所需的 最少的硬币个数 。如果没有任何一种硬币组合能组成总金额，返回 -1 。

你可以认为每种硬币的数量是无限的。

 

示例 1：

输入：coins = [1, 2, 5], amount = 11
输出：3 
解释：11 = 5 + 5 + 1
示例 2：

输入：coins = [2], amount = 3
输出：-1
示例 3：

输入：coins = [1], amount = 0
输出：0

 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  let res = new Array(amount + 1).fill(amount + 1);
  res[0] = 0;
  for (const x of coins) {
    for(let i = x; i <= amount; i ++) {
      res[i] = Math.min(res[i], res[i - x] + 1);
    }
  }
  // 上下这两种方式都可以
  // for (let j = 1; j <= amount; j ++) {
  //   for(const x of coins) {
  //     if (j >= x) {
  //       res[j] = Math.min(res[j], res[j - x] + 1);
  //     }
  //   }
  // }
  return res[amount] > amount ? -1 : res[amount];
};

coinChange([1, 2,5], 11);