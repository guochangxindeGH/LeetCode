/**
 * @param {string} s
 * @return {string}
 */
let start, maxlen;
var longestPalindrome = function(s) {
    let len = s.length;
    let a, l;
    if (len < 2) {
        return s;
    }
    for (let i = 0; i < len - 1; i ++) {
        extendPalindrome(s, i, i);
        extendPalindrome(s, i, i + 1);
    }
    return s.substr(start,maxlen);
};
let extendPalindrome = function(s, j, k) {
    while (j >= 0 && k < s.length && s[j] == s[k]) {
        j --;
        k ++;
    }
    if (maxlen < k - j -1) {
        start = j - 1;
        maxlen = k - j - 1;
    }
}