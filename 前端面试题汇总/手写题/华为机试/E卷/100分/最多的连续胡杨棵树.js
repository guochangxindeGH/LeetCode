/**
 * 题目描述
近些年来，我国防沙治沙取得显著成果。某沙漠新种植N棵胡杨（编号1-N），排成一排。

一个月后，有M棵胡杨未能成活。

现可补种胡杨K棵，请问如何补种（只能补种，不能新种），可以得到最多的连续胡杨树？

输入描述
N 总种植数量，1 <= N <= 100000

M 未成活胡杨数量，M 个空格分隔的数，按编号从小到大排列，1 <= M <= N

K 最多可以补种的数量，0 <= K <= M

输出描述
最多的连续胡杨棵树

示例1
输入
*/
// 双指针 滑动窗口
function solution (list) {
  const n = list[0]
  const m = list[1]
  const deadList = list[2]
  const k = list[3]

  const nums = new Array(n).fill(0)
  deadList.forEach(index => {
    nums[index - 1] = 1
  })

  let left = 0, maxLen = 0, sumLeft = 0, sumRight = 0
  for (let right = 0; right < n; right ++) {
    sumRight += nums[right]

    while (sumRight - sumLeft > k) {
      sumLeft += nums[left]
      left ++
    }

    maxLen = Math.max(maxLen, right - left + 1)
  }
  console.log(maxLen)
  return maxLen
}
// [1, 2, 3, 4, 5]
solution([5, 2, [2, 4], 1])
solution([10, 3, [1, 6, 9], 1])
solution([10, 3, [2, 4, 7], 2])

// 方法二：直接通过未成活树的idx计算长度
function solution2 (list) {
  const n = list[0]
  const m = list[1]
  const deadList = list[2]
  const k = list[3]

  let maxLen = 0
  for (let i = k - 1; i < deadList.length; i ++) {
    if (i === k - 1) {
      maxLen = k === deadList.length ? n : deadList[k] - 1
    } else if (i === deadList.length - 1) {
      maxLen = Math.max(maxLen, n - deadList[i - k])
    } else {
      maxLen = Math.max(maxLen, deadList[i + 1] - deadList[i - k] - 1)
    }
  }
  console.log(maxLen)
  return maxLen
}

solution2([5, 2, [2, 4], 1])
solution2([10, 3, [1, 6, 9], 1])
solution2([10, 3, [2, 4, 7], 2])
