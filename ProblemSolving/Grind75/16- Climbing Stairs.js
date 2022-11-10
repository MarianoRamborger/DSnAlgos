//? If manually calculated, this is pretty much the fibonaccy sequence:
//? Say the target is 5.
//? for 4, one path (+1) leads to 5.
//? for 3, two paths (+1, +2) lead to 5
//? So for 2, whose options are 3 and 4, the amount of possible paths must be that of 3 and 4, so 5.
//? So, thanks for dynamic programming, a bottom-up approach makes it easy to solve.
var climbStairs = function(n) {
  
  if (n < 2) {
    return n
  }

  let high = 1 //? represents the number right before n, where there is only one path. n-1+1=n 
  let low = 2 //? represents n-2, where n can be reached by n+2 or n+1+1
  let idx = n - 3 //? we'll use this to calculate how many numbers remain to be calculated

  while (idx >= 0) {
    
    let valueHolder = low 
    low = high + low //? as we go lower, the value of each number is the sum of the previous two
    high = valueHolder //? the high number becomes the previously "low" number in the sequence
  
    idx--
  }

  // finally we return the low number, which, after idx reaches 0, will represent the total number
  // of possible ways that you can reach n, starting from 0, by advancing 1 or 2 steps at a time.
   return low 


};

const climbStairsRecu = (n) => {
  let cache = {}

  return climbRecu = (n) => { //? this is closure, letting use cache as an internal variable
    
    if (n<=2) { //BASE CASE
      return n //? As it's already known, any fibo number below 3 index is itself
  }

    if (cache[n]) { //? pseudo base case 2? If we already stored in cache, let's skip the calculations.
      console.log("returning ", cache[n])
      return cache[n]
    }

  if (!cache[n]) {
    //? so, enter recursion. Each n will call the function again, until it reaches the base case, so
    //? being < 0  In a non-memoized function, returning a climbRecu (n-1) + (n-2) would ensure that
    //? this function would call itself until the top-most (function calling uses stack as structure)
    //? functions reach the base case, then bubble up the result by reaching base case, adding the result
    //? of its companion recursive call (n-1 + n-2), and getting the total amount
    cache[n] = //? Instead, if it's memoized, it will first add the new n to the cache
    climbRecu(n-1) + 
    climbRecu(n-2) 
    return cache[n] //? then serve it from the cache. We could also use a temp variable tbh, all's good
    //? as long as we don't recourse twice.
  }

  }
}


console.log(climbStairs(6))

const memoclimb = climbStairsRecu() 
console.log(memoclimb(6))
