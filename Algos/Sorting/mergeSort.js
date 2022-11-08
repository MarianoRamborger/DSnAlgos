const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const mergeSort = (array) => {
  if (array.length === 1) { // Base case
    return array
  }

    // Split Array in into right and left
  const left = array.slice(0,Math.floor(array.length /2))
  const right = array.slice(Math.floor(array.length /2))
 
  //Each time it passes itelf
  //? way this recursion works, elements will only make them to merge
  //?  if they are the only element in the array
  return merge( 
    mergeSort(left),
    mergeSort(right)
  )
}

const merge = (left, right) => {
//? Step 1. We create a new array, iterate through both left and right arrays,
//? Then push results in a way that they are ordered ascending order

  const result = [];
  let leftIdx = 0;
  let rightIdx = 0;

  while (leftIdx < left.length && rightIdx < right.length) {
   
    if (left[leftIdx] < right[rightIdx]) {
      result.push(left[leftIdx])
      leftIdx++
    } else {
      result.push(right[rightIdx])
      rightIdx++
    }
  }

  //? Step 2. What this seemingly complicated piece of code does is actually very simple.
  //? Result doesn't have all the data from left and right, because the while loop runs until
  //? Either we arrive at the end of either left or right. So once it finishes, one of those will still
  //? have numbers that haven't been pushed into the new array. So, what this does is simply concatenate
  //? any remaining elements in the new array, and retturn it
  // Uncomment the following code block to see it in action:
    // console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
  // console.log(result)  
  // console.log(result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx)))
  // console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<")

  return result
    .concat
    (left.slice(leftIdx))
    .concat
    (right.slice(rightIdx))
}

const answer = mergeSort(numbers);
console.log(answer);