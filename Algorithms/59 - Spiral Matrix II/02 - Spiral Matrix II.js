/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let result = new Array()
    for (let a = 0; a < n; a ++) {
        result[a] = new Array()
    }

    let value = 1
    let x = 0
    let x_left = 0     //起始的 X 索引位置
    let x_right = n - 1   //结束的 X 索引位置

    let y = 0
    let y_top = 0      //起始的 Y 索引位置
    let y_bottom = n - 1  // 结束的 Y 索引位置

    while (value <= n * n) {

        while (x <= x_right) {
            result[y_top][x++] = value ++
        }
        y_top ++
        y = y_top

        while (y <= y_bottom) {
            result[y++][x_right] = value ++
        }
        x_right --
        x = x_right

        while (x >= x_left) {
            result[y_bottom][x--] = value ++
        }
        y_bottom --
        y = y_bottom

        while (y >= y_top) {
            result[y--][x_left] = value ++
        }
        x_left ++
        x = x_left
    }
    return result;
};