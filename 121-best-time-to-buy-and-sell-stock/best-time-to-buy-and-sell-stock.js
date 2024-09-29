/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity;  // Track the minimum price
    let profit = 0;  // Track the maximum profit
    
    for (let i = 0; i < prices.length; i++) {
        // Update the minimum price if a lower price is found
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        }
        
        // Calculate the profit by comparing current price with minPrice
        let currentProfit = prices[i] - minPrice;
        
        // Update profit if the current profit is greater than the previous maximum profit
        if (currentProfit > profit) {
            profit = currentProfit;
        }
    }
    
    return profit;
};

