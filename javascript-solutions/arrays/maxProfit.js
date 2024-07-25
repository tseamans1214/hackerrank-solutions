// You are given an array prices where prices[i] is the price of a given stock on the ith day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            // Update minPrice if current price is lower
            minPrice = prices[i];
        } else {
            // Calculate profit if current price is higher than minPrice
            let profit = prices[i] - minPrice;
            // Update maxProfit if the calculated profit is higher
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }

    return maxProfit;
};
