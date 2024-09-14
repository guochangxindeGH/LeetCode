/**
 * 题目描述
输入N个互不相同的二维整数坐标，求这N个坐标可以构成的正方形数量。[内积为零的的两个向量垂直]

输入描述
第一行输入为N，N代表坐标数量，N为正整数。N <= 100

之后的 K 行输入为坐标x y以空格分隔，x，y为整数，-10<=x, y<=10

输出描述
输出可以构成的正方形数量。

示例1
输入

1  3
2  1 3
3  2 4
4  3 1
输出
1  0
说明
（3个点不足以构成正方形）
*/

function sulution(n, arr) {
  const list = []
  arr.forEach(e => {
    list.push(e.split(' ').map(Number))
  })

  for (let i = 0; i < n; i ++) {
    let [x1, y1] = list[i]
    for (let j = i + 1; j < n; j ++) {
      let [x2, y2] = list[j]
      let x3 = x1 - (y1 - y2), y3 = y1 + (x1 - x2)
    }
  }
  
  let res

  console.log(res)
  return res
}

sulution(4, ['0 0', '1 2', '3 1', '2 -1'])