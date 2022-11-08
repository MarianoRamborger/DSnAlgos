const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

//Game plan: For each item of the array, we search backwards to find the correct spot
//Then we splice the element there. All nice and dandy but still O(n^2)

const insertionSort = (arr) => {

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] < arr[0]) { //?Is this the smallest value yet?
      let elementToReorder = arr.splice(i,1) //? then remove the item from its place
      arr.splice(0,0,elementToReorder[0]) //? and splice it where it belongs
    }

    else { //? if not we'll have to search the array for the correct place
      for (let j = i -1 ; j >= 0; j--) {
  
        if (arr[i] <= arr[j]) {     
          //? Is the item smaller than the current idx, 
          //? but bigger than the previous one (AKA is this the correct place?)
          if (arr[i] >= arr[j - 1]) { 
            let elementToReorder = arr.splice(i,1) //? then remove the item from its place
            arr.splice(j,0,elementToReorder[0]) //? and splice it where it belongs
          }   
        }
      }
    }
  }
  return arr
}

console.log(insertionSort(numbers))