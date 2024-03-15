/**
 * 76. 最小覆盖子串
 * 给你一个字符串 s 、一个字符串 t 。返回 s 中涵盖 t 所有字符的最小子串。如果 s 中不存在涵盖 t 所有字符的子串，则返回空字符串 "" 。

  注意：

  对于 t 中重复字符，我们寻找的子字符串中该字符数量必须不少于 t 中该字符数量。
  如果 s 中存在这样的子串，我们保证它是唯一的答案。
  
  示例 1：

  输入：s = "ADOBECODEBANC", t = "ABC"
  输出："BANC"
  解释：最小覆盖子串 "BANC" 包含来自字符串 t 的 'A'、'B' 和 'C'。
  示例 2：

  输入：s = "a", t = "a"
  输出："a"
  解释：整个字符串 s 是最小覆盖子串。
  示例 3:

  输入: s = "a", t = "aa"
  输出: ""
  解释: t 中两个字符 'a' 均应包含在 s 的子串中，
  因此没有符合条件的子字符串，返回空字符串。
  
  提示：

  m == s.length
  n == t.length
  1 <= m, n <= 105
  s 和 t 由英文字母组成
  
  进阶：你能设计一个在 o(m+n) 时间内解决此问题的算法吗？
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let map = new Map(); //哈希表用来统计模板字符中，相同字符出现的次数
  let nowChar = "";
  let result = "";
  for(let i = 0; i < t.length; i++){
      map.set(t[i], (map.get(t[i]) || 0) + 1)//统计频率
  }
  let size = map.size; //记录窗口内字符对模板字符串的字符种类的抵消数，为0时表示窗口内包含所有种类字符串
  let l = 0; //定义左窗口
  for(let r = 0; r < s.length; r++) { //对右窗口依次遍历
      if(map.has(s[r])) map.set(s[r], map.get(s[r]) - 1); //当右窗口遇到模板字符串内含有的字符时，给相对应的该字符键对应的值减1
      if(map.get(s[r]) === 0) size --; //当循环中遇到哈希表中值为0的键时，对记录的字符种类数减1
      while(!size){ //当循环到使字符种类数为0时，即窗口中现在包含所有的模板字符串。准备移动左窗口
          nowChar = s.substring(l, r + 1); //因为此时窗口内字符串符合要求，所有我们先截取它们并保存到临时字符串中
          if(map.has(s[l])) { //移动左窗口前，先判断左窗口是否为模板字符串的字符种类数中的一种，即是否在哈希表中
              //如果左窗口的字符时模板字符串中的一种，移动势必回导致窗口内的字符（模板字符串内的那几种字符）频率发生变化，即相应字符减少一个
              map.set(s[l], map.get(s[l]) + 1); //所有哈希表的该字符频数恢复一个
              if(map.get(s[l]) == 1){ //当一个字符的频数恢复到1时，我们需要知道，窗口内即将少一种模板字符串内的种类
                  size ++; //给记录抵消数的size加1再进入下一次循环
                  if(!result || result.length > nowChar.length) result = nowChar; //此时记录对比保存小的字符串。
              }
          }
          l ++; //如果不在，则左窗口向右移动一位
      }
  }
  return result;
};

console.log(minWindow("ADOBECODEBANC", "ABC"));