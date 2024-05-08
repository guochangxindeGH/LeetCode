/**
 * 64. 最小路径和
 * 给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。

说明：每次只能向下或者向右移动一步。
示例 1：

输入：grid = [[1,3,1],[1,5,1],[4,2,1]]
输出：7
解释：因为路径 1→3→1→1→1 的总和最小。
示例 2：

输入：grid = [[1,2,3],[4,5,6]]
输出：12
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const m = grid.length, n = grid[0].length;
  let res = new Array(m).fill(0).map(() => new Array(n).fill(0));
  res[m - 1][n - 1] = grid[m - 1][n - 1];
  for (let i = m - 1; i >= 0; i --) {
    for (let j = n - 1; j >= 0; j --) {
      const cur = grid[i][j];
      if (i === m - 1 && j !== n - 1) { // 最后一行
        res[i][j] = cur + res[i][j + 1];
      } else if (i !== m - 1 && j === n - 1) { // 最后一列
        res[i][j] = cur + res[i + 1][j];
      } else if (i !== m - 1 && j !== n - 1) {
        res[i][j] = cur + Math.min(res[i][j + 1], res[i + 1][j]);
      }
    }
  }
  return res[0][0];
};