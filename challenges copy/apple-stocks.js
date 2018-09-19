/**
 *  I have an array stock_prices_yesterday where:
 *
 *    - The indices are the time in minutes past trade opening time, which was 9:30am local time
 *    - The values are the prices in dollars of Apple stock at the time
 *
 *  For example, the stock cost $500 at 10:30am, so stock_prices_yesterday[60] = 500;
 *
 *  Write an efficient algorithm for computing the best profit I could have made from 1 purchase
 *  and 1 sale of 1 Apple stock yesterday
 *
 *  Return 0 if no profit is possible OR if input is invalid.
 */

// keep a max profit var that you update at each point
// when you hit a valley, set that as the low. set the max profit as either the difference between that and the current val, or as max value

function bestProfit(prices) {
  if (prices.constructor.name !== 'Array' || prices.length < 2) return 0;
  let maxProfit = prices[1] - prices[0];
  let lowest = Math.min(prices[1], prices[0]);
  for (let i = 0; i < prices.length; i++) {
    const elt = prices[i];
    if (elt < lowest) lowest = elt;
    maxProfit = elt - lowest > maxProfit ? elt - lowest : maxProfit;
  }
  return maxProfit;
}
console.log(bestProfit([10, 7, 5, 8, 11, 9]));
