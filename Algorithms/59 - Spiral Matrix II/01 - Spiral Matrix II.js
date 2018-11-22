/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    let result = new Array()
    for(let k = 0; k < n; k ++){        //一维长度为i,i为变量，可以根据实际情况改变
        result[k]=new Array();    //声明二维，每一个一维数组里面的一个元素都是一个数组
    }

    let layer
    let k
    for (let i = 0; i < n; i ++) {
        for (let j = 0; j < n; j ++) {
            layer = _layer(i, j, n)  // 当前坐标外有几层
            // 坐标所在的当前层使用的第一个数字
            k = n * n - (n - 2 * layer) * (n - 2 * layer) + 1
            result[i][j] = k

            // （n - 2 * layer - 1 ）四个（n - 2 * layer - 1 ）就是（x，y）坐标所在层的所有元素个数
            if (i == layer) {  // 情况一：坐标离上边界最近
                result[i][j] = k + j - layer
            } else if (j == n - layer - 1) {   // 情况二 坐标离右边界最近
                result[i][j] = k + (n - 2 * layer - 1) + i - layer
            } else if (i == n -layer - 1) {  //情况三  坐标离下边界最近
                result[i][j] = k + 3 * (n - 2 * layer - 1) - (j - layer)
            } else { //情况四 坐标离左边界最近
                result[i][j] = k + 4 * (n - 2 * layer - 1) - (i - layer)
            }
        }
    }
    return result
};


/*
* 在一个n*n的矩阵中，计算（x，y）坐标外有多少层，左边从0开始
*
* x 横坐标
* y 纵坐标
* n 矩阵大小
* retuurn 坐标外的层数
*/
let _layer = (x, y, n) => {
    x = x < n - 1 - x ? x : n - 1 - x    //计算横坐标离上下边界的最近距离
    y = y < n - 1 - y ? y : n - 1 - y    //计算纵坐标离左右边界的最近距离
    return x < y ? x : y
}