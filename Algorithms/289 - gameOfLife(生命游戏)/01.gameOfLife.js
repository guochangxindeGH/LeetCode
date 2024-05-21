/**
 * 289. 生命游戏
 * 
 * 根据 百度百科 ， 生命游戏 ，简称为 生命 ，是英国数学家约翰·何顿·康威在 1970 年发明的细胞自动机。

给定一个包含 m × n 个格子的面板，每一个格子都可以看成是一个细胞。每个细胞都具有一个初始状态： 1 即为 活细胞 （live），或 0 即为 死细胞 （dead）。每个细胞与其八个相邻位置（水平，垂直，对角线）的细胞都遵循以下四条生存定律：

如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；
如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；
如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；
如果死细胞周围正好有三个活细胞，则该位置死细胞复活；
下一个状态是通过将上述规则同时应用于当前状态下的每个细胞所形成的，其中细胞的出生和死亡是同时发生的。给你 m x n 网格面板 board 的当前状态，返回下一个状态。


示例 1：
输入：board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]
输出：[[0,0,0],[1,0,1],[0,1,1],[0,1,0]]

示例 2：
输入：board = [[1,1],[1,0]]
输出：[[1,1],[1,1]]
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  const neighbors = [0 , -1, 1];
  const rows = board.length, cols = board[0].length;

  for (let row = 0; row < rows; row ++) {
    for (let col = 0; col < cols; col ++) {
      let liveNum = 0;
      for (let i = 0; i < 3; i ++) {
        for (let j = 0; j < 3; j ++) {
          if (!(neighbors[i] === 0 && neighbors[j] === 0)) {
            const x = row + neighbors[i];
            const y = col + neighbors[j];
            if ((x >= 0 && x < rows) && (y >= 0 && y < cols) && Math.abs(board[x][y]) === 1) {
              liveNum += 1;
            }
          }
        }
      }
      if (board[row][col] === 1 && (liveNum < 2 || liveNum > 3)) {
        board[row][col] = -1;
      }
      if (board[row][col] === 0 && liveNum === 3) {
        board[row][col] = 2;
      }
    }
  }
  for (let row = 0; row < rows; row ++) {
    for (let col = 0; col < cols; col ++) {
      if (board[row][col] > 0) {
        board[row][col] = 1;
      } else {
        board[row][col] = 0;
      }
    }
  }
  return board;
};

console.log(gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]));