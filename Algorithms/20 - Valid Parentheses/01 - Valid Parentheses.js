/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arry = [];
    let target = {};
    target['('] = ')';
    target['['] = ']';
    target['{'] = '}';
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