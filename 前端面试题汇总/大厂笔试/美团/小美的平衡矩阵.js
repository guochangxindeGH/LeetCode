

/**
 * res代表统计 矩形(1,1)到(n,m)中1的数量。
 * res[i][j] = res[i][j - 1] + res[i - 1][j] - res[i - 1][j - 1] + list[i - 1][j - 1]
*/

function test(list) {
  let n = 4
  let res = new Array(n + 1).fill(0).map(a => new Array(n + 1).fill(0))
  // res[0][0] = 0;
  // res[0][1] = 0;
  // res[1][0] = 0;
  // res[1][1] = list[0][0];
  for (let i = 1; i <= n; i ++) {
    for (let j = 1; j <= n; j++) {
      res[i][j] = res[i][j - 1] + res[i - 1][j] - res[i - 1][j - 1] + list[i - 1][j - 1]
    }
  }
  let count = 0

  for(let k = 1; k <= n; k ++) {
    if (k % 2) {
      continue
    }
    for (let i = 1; i + k - 1 <= n; i++) {
      for (let j = 1; j + k - 1 <= n; j++) {
        const x = i + k - 1
        const y = j + k - 1
        if (res[x][y] - res[i - 1][y] - res[x][j -1] + res[i - 1][j - 1] === k * k / 2) {
          count ++
        }
      }
    }
  }
  console.log(count)
  return count
}

test([[1, 0, 1, 0], 
      [0, 1, 0, 1], 
      [1, 0, 1, 0], 
      [0, 1, 0, 1]])