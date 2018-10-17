/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let len = s.length;
    let d = 2 * numRows - 2;
    let result = '';
    if (len == 0 || numRows == 0 || numRows == 1) {
        return s;
    }
    for (let i = 0; i < numRows; i ++) {
        for (let j = i; j < len; j += d) {
            result += s[j];
            if (i != 0 && i != numRows - 1 && j + d - 2*i < len) {
                result += s[j + d -2*i];
            }
        }
    }
    return result;
};