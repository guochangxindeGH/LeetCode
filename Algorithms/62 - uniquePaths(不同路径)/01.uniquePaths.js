/**
 * 62. 不同路径
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

问总共有多少条不同的路径？

示例 1：

输入：m = 3, n = 7
输出：28
示例 2：

输入：m = 3, n = 2
输出：3
解释：
从左上角开始，总共有 3 条路径可以到达右下角。
1. 向右 -> 向下 -> 向下
2. 向下 -> 向下 -> 向右
3. 向下 -> 向右 -> 向下
示例 3：

输入：m = 7, n = 3
输出：28
示例 4：

输入：m = 3, n = 3
输出：6
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths0 = function(m, n) {
  let res = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 0; i < m; i ++) {
    res[i][0] = 1;
  }
  for (let i = 0; i < n; i ++) {
    res[0][i] = 1;
  }
  for (let i = 1; i < m; i ++) {
    for (let j = 1; j < n; j ++) {
      res[i][j] = res[i][j - 1] + res[i - 1][j];
    }
  }
  return res[m - 1][n - 1];
};

var uniquePaths = function(m, n) {
  let res = [];
  for (let i = 0; i < m; i ++) {
    res[i] = [];
    for (let j = 0; j < n; j ++) {
      if (i === 0 || j === 0) {
        res[i][j] = 1;
      } else {
        res[i][j] = res[i][j - 1] + res[i - 1][j];
      }
    }
  }
  return res[m - 1][n - 1];
};

// 此外，由于 f(i,j)仅与第 i 行和第 i−1 行的状态有关，因此我们可以使用滚动数组代替代码中的二维数组，使空间复杂度降低为 O(n)。
var uniquePaths1 = function(m, n) {
  const f = new Array(n).fill(1)
  for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
          f[j] += f[j-1]
      }
  }
  return f[n - 1];
};


/**
 * 方法二：组合数学
 * 从左上角到右下角的过程中，我们需要移动 m+n−2 次，其中有 m−1 次向下移动，n−1 次向右移动。因此路径的总数，就等于从 m+n−2 次移动中选择 m−1 次向下移动的方案数，即组合数：
 *  C((m+n+2), (m-1))
 * */ 
var uniquePaths2 = function(m, n) {
  let ans = 1;
  for (let x = n, y = 1; y < m; ++x, ++y) {
      ans = Math.floor(ans * x / y);
  }
  return ans;
};