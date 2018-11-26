/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let ans = new Array()
    for (let a = 0; a < 100; a ++) {
        ans[a] = new Array()
    }
    for (let i = 0; i < m; i ++) {
        for (let j = 0; j < n; j ++) {
            if (i == 0 || j == 0) {
                ans[i][j] = 1
            } else {
                ans[i][j] = ans[i][j-1] + ans[i-1][j]
            }
        }
    }
    return ans[m-1][n-1]
};