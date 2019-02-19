/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let ans = [], add = 0, len = digits.length
    digits[len - 1] ++
    for (let i = len - 1; i >= 0; i --) {
        let sum = digits[i] + add
        ans[i] = sum % 10
        add = ~~(sum / 10)
    }
    if (add) ans.unshift(add)
    return ans
};