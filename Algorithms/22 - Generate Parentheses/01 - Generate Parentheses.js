/**
 * @param {number} n
 * @return {string[]}
 */
let _backtrack = function(ans,cur,left,right,n) {
    if (left === n && right === n) {
        ans.push(cur);
        return;
    }
    if (left < n) {
        _backtrack(ans,cur + '(', left + 1, right, n);
    }
    if (right < left) {
        _backtrack(ans,cur + ')', left, right + 1, n);
    }
}
var generateParenthesis = function(n) {
    let ans = [];
    _backtrack(ans, '', 0, 0, n);
    return ans;
};