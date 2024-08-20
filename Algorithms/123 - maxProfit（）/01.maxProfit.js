
/**
 * 123. 买卖股票的最佳时机 III
 * 给定一个数组，它的第 i 个元素是一支给定的股票在第 i 天的价格。

设计一个算法来计算你所能获取的最大利润。你最多可以完成 两笔 交易。

注意：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。

 

示例 1:

输入：prices = [3,3,5,0,0,3,1,4]
输出：6
解释：在第 4 天（股票价格 = 0）的时候买入，在第 6 天（股票价格 = 3）的时候卖出，这笔交易所能获得利润 = 3-0 = 3 。
     随后，在第 7 天（股票价格 = 1）的时候买入，在第 8 天 （股票价格 = 4）的时候卖出，这笔交易所能获得利润 = 4-1 = 3 。
示例 2：

输入：prices = [1,2,3,4,5]
输出：4
解释：在第 1 天（股票价格 = 1）的时候买入，在第 5 天 （股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。   
     注意你不能在第 1 天和第 2 天接连购买股票，之后再将它们卖出。   
     因为这样属于同时参与了多笔交易，你必须在再次购买前出售掉之前的股票。
示例 3：

输入：prices = [7,6,4,3,1] 
输出：0 
解释：在这个情况下, 没有交易完成, 所以最大利润为 0。
示例 4：

输入：prices = [1]
输出：0
*/

/**
 * buy1即为以 prices[0] 的价格买入股票，因此 buy1 =−prices[0]；sell1即为在同一天买入并且卖出，因此 sell1 =0；
 * buy2 即为在同一天买入并且卖出后再以 prices[0] 的价格买入股票，因此 buy 2 =−prices[0]；同理可得 sell2 =0。
 * 我们将这四个状态作为边界条件，从 i=1 开始进行动态规划，即可得到答案。
*/
var maxProfit1 = function(prices) {
  let n = prices.length
  //状态有下面4种
  //buy1 持有第一股  sell1卖出第一股   
  //buy2 持有第二股  sell2卖出第二股
  let buy1 = -prices[0], buy2 = -prices[0];
  let sell1 = 0, sell2 = 0;
  for (let i = 1; i < n; i++) {
      buy1 = Math.max(buy1, -prices[i]);
      sell1 = Math.max(sell1, buy1 + prices[i]);
      buy2 = Math.max(buy2, sell1 - prices[i]);
      sell2 = Math.max(sell2, buy2 + prices[i]);
  }
  console.log(sell2)
  return sell2;
}
var maxProfit2 = function(prices) {
  let n = prices.length
  let res = new Array(n).fill(0).map(v => new Array(4).fill(0))
  res[0][0] = -prices[0], res[0][1] = 0, res[0][2] = -prices[0], res[0][3] = 0
  for (let i = 1; i < n; i++) {
    res[i][0] = Math.max(res[i - 1][0], - prices[i])
    res[i][1] = Math.max(res[i - 1][1], res[i - 1][0] + prices[i])
    res[i][2] = Math.max(res[i - 1][2], res[i - 1][1] - prices[i])
    res[i][3] = Math.max(res[i - 1][3], res[i - 1][2] + prices[i])
  }
  console.log(res[n - 1][3])
  return res[n - 1][3];
  // const dp = [0, -prices[0], 0, -prices[0], 0];
  // for (let i = 1; i < n; i++) {
  //   dp[1] = Math.max(dp[1], dp[0] - prices[i]);
  //   dp[2] = Math.max(dp[2], dp[1] + prices[i]);
  //   dp[3] = Math.max(dp[3], dp[2] - prices[i]);
  //   dp[4] = Math.max(dp[4], dp[3] + prices[i]);
  // }
  // return dp[4];
}

maxProfit1([3,3,5,0,0,3,1,4])
maxProfit2([3,3,5,0,0,3,1,4])