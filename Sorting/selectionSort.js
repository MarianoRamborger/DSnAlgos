const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// A naive selection sort.
//Iterate through the array, each time get the smallest value then swap it the current index.
const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) { //For every index
    let currentMin = null
    let currentMindx = null
    for (j = i; j < arr.length; j++) { //Get the minimum remaining value
      if ((!currentMin) || (arr[j] < currentMin)) {
        currentMin = arr[j]
        currentMindx = j
    }}
    if (currentMin < arr[i]) { 
      currentValue = arr[i] //Then swap it with the current index
      arr[i] = currentMin
      arr[currentMindx] = currentValue
    }  
  }
  return arr
}
console.log(selectionSort(numbers))