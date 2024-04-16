/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  let badList = [];
  let goodNums = 0;
  for (let i = 0; i < grid.length; i ++) {
    for (let j = 0; j < grid[0].length; j ++) {
      if (grid[i][j] === 1) {
        goodNums ++;
      } else if (grid[i][j] === 2) {
        badList.push([i, j]);
      }
    }
  }
  if (!goodNums) return 0;
  let time = 0;
  const dx = [0, 1, 0, -1], dy = [-1, 0, 1, 0];
  while (badList.length) {
    const size = badList.length;
    time ++;
    for (let i = 0; i < size; i ++) {
      let cur = badList.shift();
      for (let j = 0; j < 4; j ++) {
        const x = cur[0] + dx[j];
        const y = cur[1] + dy[j];
        if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length || grid[x][y] !== 1) {
          continue;
        }
        grid[x][y] = 2;
        badList.push([x, y]);
        goodNums --;
      }
    }
  }
  return goodNums ? -1 : time - 1;
};