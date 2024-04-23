/**
 * 51. N 皇后
 * 按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。

n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。

每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

 

示例 1：


输入：n = 4
输出：[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
解释：如上图所示，4 皇后问题存在两个不同的解法。
示例 2：

输入：n = 1
输出：[["Q"]]
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
  let board = new Array(n);
  for (let i = 0; i < n; i ++) {
    board[i] = new Array(n).fill('.');
  }
  let res = [];
  let cols = new Set(); // 已选列的集合，出现过皇后的列
  let diag1 = new Set(); // 正对角线集合（斜率为1）/
  let diag2 = new Set(); // 负对角线集合（斜率为-1）\

  const dfs = (row) => {
    if (row === n) {
      let strBoard = [...board];
      for (let i = 0; i < n; i ++) {
        strBoard[i] = strBoard[i].join('');
      }
      res.push(strBoard);
      return;
    }
    for (let col = 0; col < n; col ++) {
      // 如果当前点的所在的列，所在的对角线都没有皇后，即可选择，否则，跳过
      if (!cols.has(col) &&! diag1.has(row + col) && !diag2.has(row - col)) {
        board[row][col] = 'Q'; // 放置皇后
        cols.add(col); // 记录放了皇后的列
        diag1.add(row + col); // 记录放了皇后的负对角线
        diag2.add(row - col); // 记录放了皇后的正对角线
        dfs(row + 1);
        board[row][col] = '.'; // 撤销该点的皇后
        cols.delete(col); // 对应的记录也删一下
        diag1.delete(row + col);
        diag2.delete(row - col);
      }
    }
  }
  dfs(0);
  return res;
};