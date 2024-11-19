/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0
    let minPrice = Infinity

    for(let i =0;i<prices.length;i++){
        if(minPrice > prices[i]){
            minPrice = prices[i]
        } else {
            profit = Math.max(profit, prices[i] - minPrice)
        }
    }

    return profit
};