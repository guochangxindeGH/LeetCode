
/**
 * LYA的魔药配方-小美的游戏
 * 
 * 输入格式

第一行包含两个整数 n 和 m，分别表示魔药材料的数量和最多可以进行的操作次数。

第二行包含 n 个整数 a1...an，表示初始时每种材料的魔力值。

输出格式

输出一个整数，表示在最多进行 
m
m 次操作后，魔药配方中所有材料的魔力值之和的最大值。

由于答案可能很大，请输出答案对 10**9 +7 取模的结果。

样例输入
6 2
1 2 3 4 5 6

样例输出
128

*/

function solution(n, m, list) {
  let arr = list
  while (m > 0) {
    let last1 = arr[n - 1]
    let last2 = arr[n - 2]
    arr.splice(n - 2)
    arr.unshift(1)
    arr.push(last1 * last2)
    m --
  }
  let sum = 0
  for (const el of arr) {
    sum += el
  }
  console.log(sum)
}

solution(6, 2, [1, 2, 3, 4, 5, 6])