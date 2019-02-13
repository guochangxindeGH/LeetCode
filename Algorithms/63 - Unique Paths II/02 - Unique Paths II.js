/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
// 特别提示:此题不同于走迷宫,来到一点只能选择向下或向右走或退回,用递归直接超时,所以选择动态规划

var uniquePathsWithObstacles = function(obstacleGrid) {
    let pathCount = []
    pathCount[0] = 1
    for (let i = 0; i < obstacleGrid.length; i ++) {
        for (let j = 0; j < obstacleGrid[0].length; j ++) {
            if (obstacleGrid[i][j] == 1) pathCount[j] = 0
            else if (j > 0) pathCount[j] = (typeof pathCount[j] == 'undefined' ? 0 : pathCount[j]) + (typeof pathCount[j - 1] == 'undefined' ? 0 : pathCount[j - 1])
        }
    }
    return pathCount[obstacleGrid[0].length - 1]
};