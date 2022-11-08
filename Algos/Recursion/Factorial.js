//? Not accounting for neg nums
const iterativeFactorial = (n) => { //  O (n)
  for (let e = n-1; e > 1; e--) {
    n*= e
  }
  return n
}

//? O(n), n° of calls increase w/input in a linear fashion
const recursiveFactorial = (fact, mulby = fact -1 ) => { 
  if (mulby <= 1) {
    return fact
  }
  else {
    return recursiveFactorial(fact*= mulby, mulby - 1)
  }
}

console.log(iterativeFactorial(5))
console.log(recursiveFactorial(5))