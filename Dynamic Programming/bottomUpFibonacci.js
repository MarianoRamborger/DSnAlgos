const bottomUpFibonacci = (n) => {
  let answer = [0,1]
  for (let i = 2; i <= n; i++) {
    answer.push(answer[i-1] + answer[i-2]) 
    if (i === n) {
      return answer[n]
    }
  }
}