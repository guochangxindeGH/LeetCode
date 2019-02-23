/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    let m = matrix.length, n = matrix[0].length
    let a = [], b = []
    for (let i = 0; i < m; i ++)
        for (let j = 0; j < n; j ++)
            if (matrix[i][j] === 0)
                a[i] = b[j] = true
    for (let i = 0; i < m; i ++)
        for (let j = 0; j < n; j ++)
            if (a[i] || b[j])
                matrix[i][j] = 0
};