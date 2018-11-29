/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    let ans = []
    for (let i = 0; i < (1 << n); i ++) {
        ans[i] = i ^ (i >> 1)
    }
    return ans
};