/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    let list = [];
    if (digits.length == 0) {
        return list;
    }
    _backtracking("",digits,0,list);
    return list;

};
function _backtracking(s, digits, flag, list1) {
    let strings = [ "", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz" ];
    if (flag >= digits.length) {
        list1.push(s);
        return ;
    }
    let char = strings[digits[flag]];
    for (let i = 0; i < char.length; i ++) {
        _backtracking(s + char[i], digits, flag + 1, list1);
    }
}