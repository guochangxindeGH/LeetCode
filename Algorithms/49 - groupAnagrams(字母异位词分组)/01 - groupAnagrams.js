/**
 * 给你一个字符串数组，请你将 字母异位词 组合在一起。可以按任意顺序返回结果列表。
   字母异位词 是由重新排列源单词的所有字母得到的一个新单词。
 * @param {string[]} strs
 * @return {string[][]}
 */
let groupAnagrams = function(strs) {
  let map = new Map();
  strs.forEach(item => {
    const array = item.split('').sort().join('');
    const key = array.toString();
    let list = map.get(key) || [];
    list.push(item);
    map.set(key, list);
  });
  return Array.from(map.values());
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));