/**
 * 79. 单词搜索
 * 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。

单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。

 

示例 1：


输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
输出：true
示例 2：


输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
输出：true
示例 3：


输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
输出：false

 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  const row = board.length, col = board[0].length, directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
  let list = new Array(row);
  for (let i = 0; i < list.length; i ++) {
    list[i] = new Array(col).fill(false);
  }
  const dfs = (i, j, s, k) => {
    if (board[i][j] !== s.charAt(k)) {
      return false;
    } else if (k === s.length - 1) {
      return true;
    }
    list[i][j] = true;
    let result = false;
    for (const [dx, dy] of directions) {
      const newX = i + dx, newY = j + dy;
      if (newX >= 0 && newX < row && newY >= 0 && newY < col) {
        if (!list[newX][newY]) {
          const flag = dfs(newX, newY, s, k + 1);
          if (flag) {
            result = true;
            break;
          }
        }
      }
    }
    list[i][j] = false;
    return result;
  }
  for (let i = 0; i < row; i ++) {
    for (let j = 0; j < col; j ++) {
      const flag = dfs(i, j, word, 0);
      if (flag) return true;
    }
  }
  return false;
};

exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], 'ABCCED');