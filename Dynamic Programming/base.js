//? Use closure to avoid polluting the global state with cache
const memoizedWithClosure = () => { //?doesnt need the parameter cause it returns the function 
  let cache = {} //? and the function accepts the parameter
  //? it returns this function, so any object holding the whole function (memoizedWithClosure)
  //? will keep the cache withouth releasing it into the global state, yet provide access to the
  return (n) => { //? buissiness logic
    if (n in cache) { 
      console.log("returning from cache")
      return cache[n]
    } else {
      
      cache[n] = n + 80
      return cache[n]
    }
  }
}

//? We can leverage closure:
const memoized = memoizedWithClosure() //Thi
console.log(memoized(4)) // 84
console.log(memoized(4)) // returning from cache 84
console.log(memoized(2)) // 82

