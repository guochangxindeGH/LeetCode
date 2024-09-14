/**
 * 题目描述
单词接龙的规则是：

可用于接龙的单词首字母必须要前一个单词的尾字母相同；

当存在多个首字母相同的单词时，取长度最长的单词，如果长度也相等，则取字典序最小的单词；已经参与接龙的单词不能重复使用。

现给定一组全部由小写字母组成单词数组，并指定其中的一个单词作为起始单词，进行单词接龙，

请输出最长的单词串，单词串是单词拼接而成，中间没有空格。

输入描述
输入的第一行为一个非负整数，表示起始单词在数组中的索引K，0 <= K < N ；

输入的第二行为一个非负整数，表示单词的个数N；

接下来的N行，分别表示单词数组中的单词。

备注：

单词个数N的取值范围为[1, 20]；
单个单词的长度的取值范围为[1, 30]；
输出描述
输出一个字符串，表示最终拼接的单词串。
*/

function sulution(k, n, words) {
  
  let res = words[k]
  const dfs = (str, list) => {
    let newList = [...list]
    for (let i = 0; i < n; i ++) {
      const cur = words[i]
      if (str.substr(-1) === cur.charAt(0) && !newList.includes(i)) {
        str = str.slice(0, -1) + cur
        newList.push(i)
        dfs(str, newList)
        str = str.slice(0, -1 * cur.length + 1)
        newList.pop()
        
      }
      if (i === n - 1) {
        res = str.length > res.length ? str : res
      }
    }
  }
  
  let arr = []
  arr.push(k)
  dfs(res, arr)

  console.log(res)
  return res
}

sulution(0, 6, ['word', 'dd', 'da', 'dc', 'dword', 'd'])
sulution(4, 6, ['word', 'dd', 'da', 'dc', 'dword', 'd'])