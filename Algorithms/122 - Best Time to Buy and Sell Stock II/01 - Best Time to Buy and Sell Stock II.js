/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxPro = 0, tmp = 0
    for (let i = 1; i < prices.length; i ++) {
        tmp = prices[i] - prices[i - 1]
        if (tmp > 0) {
            maxPro += tmp
        }
    }
    return maxPro
};