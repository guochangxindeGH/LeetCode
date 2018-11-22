/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let result = []
    if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
        return result;
    }
    //只有一行的情况
    if (matrix.length == 1) {
        for (let a of matrix[0]) {
            result.push(a)
        }
        return result
    }
    //只有一列的情况
    if (matrix[0] == 1) {
        for (let a in matrix) {
            result.push(matrix[a][0])
        }
        return result
    }

    //计算有多少圈
    let row = matrix.length
    let col = matrix[0].length
    let cycle = row < col ? row : col
    cycle = (cycle + 1) / 2

    let round = 0 //记录当前是第几圈
    let left = 0
    let right = matrix[0].length - 1
    let top = 0
    let down = matrix.length - 1
    let total = row * col
    let count = 0
    while (round < cycle) {

        //上面的一行
        for (let i = left; i <= right && count < total; i ++) {
            count ++
            result.push(matrix[round][i])
        }
        top ++

        //右边一列
        for (let i = top; i <= down && count < total; i ++) {
            count ++
            result.push(matrix[i][col - round - 1])
        }
        right --

        //底下一行
        for (let i = right; i >= left && count < total; i --) {
            count ++
            result.push(matrix[row - round - 1][i])
        }
        down --

        //左边一列
        for (let i = down; i >= top && count < total; i --) {
            count ++
            result.push(matrix[i][round])
        }
        left ++

        round ++
    }
    return result
};