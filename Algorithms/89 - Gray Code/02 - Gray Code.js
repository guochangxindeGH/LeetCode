/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    let ans = [0]
    for (let i = 0; i < n; i ++) {
        let size = ans.length
        for (let j = size - 1; j >= 0; j --) {
            ans.push(ans[j] | (1 << i))  //用的或运算符，也不知道为啥怎么做
        }
    }
    return ans
};