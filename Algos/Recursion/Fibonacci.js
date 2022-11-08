
const iterativeFibonacci = (n) => {
  a = 0; b = 1;
  currentNumber = 0
  currentIdx = 2;

  if (n < 2) {
    return n
  }

  while (currentNumber < n) {
    if (currentIdx === 0) {
      currentIdx++
    }

    console.log(currentNumber)
    currentIdx++
    currentNumber = a + b
      a = b
      b = currentNumber

  }

  if (currentNumber === n) {
    return ("fibonacci index is " + currentIdx)
  } else {
    return "That's no fibonacci"
  }
  
}

const recFibonacci = (target, current = 0, b= 1, index = 0) => {
  

  if (current === target) {
    return index
  } else if (current > target) {
    return "Not a fibonumber"
  } else {
    return recFibonacci(target, b, current + b, index +1)
  }

}

console.log(iterativeFibonacci(34))
// console.log(recFibonacci(34))