/**
 * LYA 的公寓租金分摊 
 * 输入格式
 * n, m 分别表示 LYA 拥有的公寓楼数量和城市中租户的总数
 * 接下来有 2n 行,每两行描述一栋公寓楼的信息:
 *  第一行包含两个整数分别表示该公寓楼的租户总数(包括 LYA)和月租总金额
 *  第二行表示每位租户(不包括 LYA)的编号
 * 
 * 输出格式
 *  输出包含 m 个整数,第 i 个整数表示编号为 i 的租户需要支付的租金金额。
 * 样例输入
 *  2 3
    3 10
    1 2
    4 10
    1 2 3

    样例输出
    7 7 3
*/

function solution(n, m, list) {
  let map = new Map()
  for(let i = 0; i < list.length; i += 2) {
    const money = Math.ceil(list[i][1] / list[i][0])
    const persons = list[i + 1]
    for (const el of persons) {
      if (map.has(el)) {
        map.set(el, map.get(el) + money)
      } else {
        map.set(el, money)
      }
    }
  }
  map.forEach(item => {
    console.log(item)
  })
}

solution(2, 3, [[3, 10], [1, 2], [4, 10], [1, 2, 3]])