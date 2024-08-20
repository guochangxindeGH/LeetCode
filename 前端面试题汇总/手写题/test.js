


var maxProfit = function(prices) {
  let max = 0
  let begin = prices[0]
  for(let i = 1; i < prices.length; i ++) {
    if (prices[i] < begin) {
      begin = prices[i]
    } else if (prices[i] > begin) {
      max = Math.max(max, prices[i] - begin)
    }
  }
  return max
}

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))