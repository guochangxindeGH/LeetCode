

/**
 * 平均数为k的最长连续子数组
*/

function solution(list, k) {
  let map = new Map()
  map.set(0, 0)
  let maxLength = 0
  let sum = 0
  for (let i = 1; i <= list.length; i ++) {
    sum = sum + list[i - 1] - k
    if (map.has(sum)) {
      maxLength = Math.max(maxLength, i - map.get(sum))
    }
  }
  console.log(maxLength)
}

solution([3, 1, 0, 4], 2)