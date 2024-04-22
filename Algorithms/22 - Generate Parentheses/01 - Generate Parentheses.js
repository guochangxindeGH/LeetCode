/**
 * 22. 括号生成
 * 
 * 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

 

示例 1：

输入：n = 3
输出：["((()))","(()())","(())()","()(())","()()()"]
示例 2：

输入：n = 1
输出：["()"]
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function(n) {
    let ans = [];
    const dfs = (left, right, str) => {
        if (str.length === 2 * n) {
            ans.push(str);
            return;
        }
        if (left < n) {
            dfs(left + 1, right, `${str}(`);
        }
        if (left > right) {
            dfs(left, right + 1, `${str})`);
        }
    }
    dfs(0, 0, '')
    return ans;
};


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
var generateParenthesis2 = function(n) {
    let ans = [];
    _backtrack(ans, '', 0, 0, n);
    return ans;
};