/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let result = 0
    let buy = Number.MAX_VALUE
    for (let price of prices) {
        buy = Math.min(buy,price)
        result = Math.max(result,price - buy)
    }
    return result;
};