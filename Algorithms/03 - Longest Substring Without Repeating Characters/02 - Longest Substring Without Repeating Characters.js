/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let n = s.length, ans = 0;
    let map = new Map();
    for (let i = 0, j = 0; j < n; j ++) {
        if (map.get(s[j])) {
            i = Math.max(map.get(s[j]), i);
        }
        ans = Math.max(ans, j - i + 1);
        map.set(s[j], j + 1);
    }
    return ans;
};