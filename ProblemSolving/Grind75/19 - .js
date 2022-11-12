//Hash map method. It's okay but the challenge lies in having a constante spatial complexity
/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {

  let hash = {}

  nums.forEach((n,i )=> {
    if(!hash[n]) {
      hash[n] = 1
    } else {
      hash[n]++
    }
  })

  for (n in hash) {
    if (hash[n] > nums.length / 2) {
      return n
    }
  }
};


//? Sorting and sliding window
//? We sort the array then use sliding window to check just the latest number in our sorted list
//? If at any point we fulfill the base case, we return from the loop, then return the target
/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {

  nums.sort((a,b) => {return a - b})
  
  let lastSeen = null
  let lastAmount = 0
  nums.forEach(n =>{

      if (lastAmount > nums.length/2) {
        return 
      }
      
      else if (n !== lastSeen) {
        lastSeen = n
        lastAmount = 1
      }
      else {
        lastAmount++
      }
     
  })
  return lastSeen
  
};