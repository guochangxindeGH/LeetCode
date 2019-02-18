/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let mCol = grid[0].length
    let nRow = grid.length
    for (let i = 1; i < mCol; i ++)  grid[0][i] = grid[0][i] + grid[0][i - 1]
    for (let j = 1; j < nRow; j ++)  grid[j][0] = grid[j][0] + grid[j - 1][0]
    for (let i = 1; i < nRow; i ++) {
        for (let j = 1; j < mCol; j ++) {
            grid[i][j] = Math.min(grid[i][j - 1],grid[i - 1][j]) + grid[i][j]
        }
    }
    return grid[nRow - 1][mCol - 1]
};