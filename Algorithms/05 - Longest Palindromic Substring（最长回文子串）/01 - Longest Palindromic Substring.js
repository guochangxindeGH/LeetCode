/**
 * 5. 最长回文子串
 * 
 * 给你一个字符串 s，找到 s 中最长的回文子串

如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。

示例 1：

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。
示例 2：

输入：s = "cbbd"
输出："bb"
 * @param {string} s
 * @return {string}
 */
// 动态规划
var longestPalindrome = function(s) {
    let len = s.length;
    if (len < 2) {
        return s;
    }
    let begin = 0, maxLen = 1;
    let res = new Array(len).fill().map(() => new Array(len));
    for (let i = 0; i < len; i ++) {
        res[i][i] = true;
    }
    for (let L = 2; L <= len; L ++) {
        for (let i = 0; i < len; i ++) {
            // 由 L 和 i 可以确定右边界，即 j - i + 1 = L 得
            let j = L + i - 1;
            // 如果右边界越界，就可以退出当前循环
            if (j >= len) {
                break;
            }
            if (s[i] != s[j]) {
                res[i][j] = false;
            } else {
                if (j - i < 3) {
                    res[i][j] = true;
                } else {
                    res[i][j] = res[i + 1][j - 1];
                }
            }
            // 只要 res[i][L] == true 成立，就表示子串 s[i..L] 是回文，此时记录回文长度和起始位置
            if (res[i][j] && j - i + 1 > maxLen) {
                maxLen = j - i + 1;
                begin = i;
            }
        }
    }
    return s.slice(begin, begin + maxLen);
};
longestPalindrome('aaaa');

// 中心扩散法
var longestPalindrome = function(s) {
    let ans = ""
    let maxLen = 0
    for(let i = 0; i < s.length; i++){
        let left = i
        let right = i
        while(left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)){
            const curLen = right - left + 1
            if(curLen > maxLen){
                maxLen = curLen
                ans = s.slice(left, right+1)
            }
            left--
            right++
        }

        left = i;
        right = i+1
        while(left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)){
            const curLen = right - left + 1
            if(curLen > maxLen){
                maxLen = curLen
                ans = s.slice(left, right+1)
            }
            left--
            right++
        }
    }
    return ans
};