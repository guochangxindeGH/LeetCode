/**
 * 题目描述
给定参数n，从1到n会有n个整数：1,2,3,…,n,这n个数字共有n!种排列。

按大小顺序升序列出所有排列的情况，并一一标记，

当n=3时,所有排列如下:

“123” “132” “213” “231” “312” “321”

给定n和k，返回第k个排列。

输入描述
输入两行，第一行为n，第二行为k，
给定n的范围是[1,9],给定k的范围是[1,n!]。
输出描述
输出排在第k位置的数字。

示例1
输入

1 3
2 3

输出

1 213
说明

3的排列有123,132,213…,那么第三位置就是213
*/

function sulution(n, k) {
  let res = [], curList = []
  const dfs = () => {
    if (curList.length === n) {
      res.push([...curList])
    }
    for (let i = 1; i <= n; i ++) {
      if (curList.includes(i)) {
        continue
      }
      curList.push(i)
      dfs(curList)
      curList.pop()
    }
  }
  dfs()
  console.log(res[k - 1].join(''))
  return res
}

sulution(3, 3)
sulution(2, 2)