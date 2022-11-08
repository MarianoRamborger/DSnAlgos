//? return fibonacci number of n index.
const memoizedFibonacci = () => {
   let cache = {}
   return recuFibo = (n) => {
    if (n in cache) {
      return cache[n] //If in cache, return it
    }
    if (n < 2) {
        return n
      } else {
        //if not get it in cache, then return it
        cache[n] = recuFibo(n-1) + recuFibo(n-2) 
        return cache[n]
      }
  }

}

const memoFibo = memoizedFibonacci()
// console.log(memoFibo(100))

// This is the difference between a quick calculation and a stack overflow. This is a O(n)
// Space complexity increases with the inclusion of the cache, but the speed increase is incredible.


