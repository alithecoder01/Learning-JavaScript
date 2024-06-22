/**
 * @param {number[]} prices
 * @return {number}
 */

const prices = [7,6,4,3,1];

var maxProfit = function (prices) {
  var pro=0
  var prof =0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      var buy = prices[i - 1];
      var sell = prices[i];
       prof= sell - buy;
      
      pro +=prof
      
    }
  }
  return pro
  
};
console.log(maxProfit(prices))

