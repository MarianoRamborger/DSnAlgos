/**
 * @param {number[]} prices
 * @return {number}
 */

// The naive solution

// var maxProfit = function(prices) {
//   let maxProfit = 0
//   for (let i = 0; i < prices.length -1; i++) {
//     for(let j = i; j < prices.length; j++) {
//       if ((-prices[i] + prices[j]) > maxProfit) {   
//         maxProfit = -prices[i] + prices[j]
//       }
//     }
//   } 
//   return maxProfit
// };

var maxProfit = function(prices) {
  let maxProfit = 0
  let smallestPossible = prices[0]

  //The gameplan: We are going to iterate through the array JUST ONCE, no matter what.
  //Each time we going to ask: Suppose we sell today, what's the lowest buying price we have seen before?
  //Well, if it's our best option yet, we'll consider it.. for the moment.
  //Also, is this a good day for buying? Is the price lower than the lowest day so far?

  for (let i = 1; i < prices.length; i++) {
    let bestOffer = -smallestPossible + prices[i] //Highest possible value we possible if selling today.
    
    if (bestOffer > maxProfit) {
      maxProfit = bestOffer
    }
    
    if (prices[i] < smallestPossible) {
      smallestPossible = prices[i]
    }
  } 
  return maxProfit
};