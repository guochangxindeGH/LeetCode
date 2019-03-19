/*
* 2、给定一个字符串，找出其中无重复字符的最长子字符串长度—字节跳动前端面试题
* */



// var lengthOfLongestSubstring = function(s) {
//     let n = s.length;
//     let set = new Set();
//     let ans = 0, i = 0, j = 0;
//     while (i < n && j < n) {
//         if (!set.has(s[j])) {
//             set.add(s[j++]);
//             ans = Math.max(ans, j - i);
//         } else {
//             set.delete(s[i++]);
//         }
//     }
//     return ans;
// };

//时间复杂度：O(2n) = O(n)O(2n)=O(n)，在最糟糕的情况下，每个字符将被 ii 和 jj 访问两次。
//空间复杂度：O(min(m, n))O(min(m,n))，与之前的方法相同。滑动窗口法需要 O(k)O(k) 的空间，其中 kk 表示 Set 的大小。而Set的大小取决于字符串 nn 的大小以及字符集/字母 mm 的大小。



function StrLen(str) {
    let result = 1    //最终要返回的结果的初始值
    let norepeatStr = '' //用于存放无重复字符串
    let len = str.length
    for (let i = 0; i < len; i++) {
        //charAt()获取的是字符串索引对应的具体字符
        let specStr = str.charAt(i)
        //indexOf()查找的是某个字符第一次出现并返回这个索引值，若没有这个字符，返回-1
        let index = norepeatStr.indexOf(specStr)
        if (index === -1) {
            //将遍历得到的字符（未重复）拼接在norepeatStr后面
            norepeatStr = norepeatStr + specStr
            result = result < norepeatStr.length ? norepeatStr.length : result
        } else {
            //若遇到重复的字符，那么将已出现在norepeatStr里的字符删除，并将新的（重复的添加到末尾）
            norepeatStr = norepeatStr.substr(index + 1) + specStr
        }
    }
    return result
}

console.log(StrLen(abbbcbd))



/*
*解题思路
这题的要点就是无重复字符的理解。首先字符串内字符位置是固定的，我们要采用顺序循环的方式解题，然后就是理解无重复字符的含义，把当前字符串分割，每个小分割内不能出现重复的字符。也就是说分割的字符串是不会互相叠加重复的，每当该段分割的下一个字符与该段分割内字符相同，当即重新开始分割字符。

所以解题时需要一个存储当前分割片段的对象，用来比较下一个字符。并取这个分割片段的长度，与每个分割片段的最大长度比较即可。本题主要考的是题面的理解，以及字符串方法的运用，需要熟练地运用才能快速解题。
* */