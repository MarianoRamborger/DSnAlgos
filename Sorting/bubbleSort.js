const sorthis = [
  99, 44,  6,   2, 1,
   5, 63, 87, 283, 4,
   0
]

//It's hardly the most efficient or elegant, but bubble sort seldom is
const bubbleSort = (arr) => {

  let sortMove = false

  do {
    sortMove = false
    for (let i = 0; i < arr.length -1 ; i++) {
   
      if (arr[i] > arr[i + 1]) {
        sortMove = true
        let smaller = arr[i + 1]
        let greater = arr[i]
        arr[i] = smaller
        arr[i + 1] = greater
      }
    }
  } while (sortMove)

  return arr
}
