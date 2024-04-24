/**
 * 20. 有效的括号
 * 
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
每个右括号都有一个对应的相同类型的左括号。
 

示例 1：

输入：s = "()"
输出：true
示例 2：

输入：s = "()[]{}"
输出：true
示例 3：

输入：s = "(]"
输出：false
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (!s.length) {
        return true;
    } else if (s.length % 2 !== 0) {
        return false;
    }
    let arry = [];
    let target = {
        '(': ')',
        '[': ']',
        '{': '}'
    };
    for (let i = 0; i < s.length; i ++) {
        if (!arry.length) arry.push(s[i]);
        else {
            if (s[i] == target[arry[arry.length - 1]]) {
                arry.pop();
            } else {
                arry.push(s[i]);
            }
        }
    }
    return !arry.length;
};