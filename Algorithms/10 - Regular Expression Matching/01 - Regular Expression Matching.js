/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let pp = '^' + p + '$';
    let pattern = new RegExp( pp, 'g');
    return pattern.test(s);
};