//Given two sorted arrays, can you merge them in one such as still sorted?

const a1 = [0, 1, 3, 4]
const a2 = [3, 5, 8, 10]

//!------------------------ MY SOLUTIONS (blind) --------------------------
//? Imperative way
//TODO gameplan, iterate thru both arrays, progressively compare numbers so smaller goes into array.
//TODO once we make it to the end of an array, we concatenate what remains of the longer one
const ImpMergeSortedArrays = (arr1, arr2) => {

  const newArray = []
  let a1Idx = 0; let a2Idx = 0;

  while ((a1Idx < arr1.length) || (a2Idx < arr2.length)) {
    
    //? if number in arr1 is smaller, or
    //? we iterated through the end of arr 2 and thus arr[2Idx] is undefined, pursh from arr1
      if (arr2[a2Idx] === undefined || arr1[a1Idx] < arr2[a2Idx]) {
        newArray.push(arr1[a1Idx])
        a1Idx++;
      } 
      else { //? If not push from arr2
        newArray.push(arr2[a2Idx])
        a2Idx++;
      }   
  }
   //Once you reached the end of one array, append the rest of the other one.
   //! This one worked well enough but concatenate has an O(n)complexity
    // if (a1Idx < arr1.length) {
    //   return newArray.concat(arr1.slice(a1Idx))
    // } else {
    //   return newArray.concat(arr2.slice(a2Idx))
    // }
    return newArray

    //! Rewrite to avoid using concat


}

//? Declarative sorting way 
const decSortMergeArrs = (arr1,arr2) => { //? Temporal complexity depends on browser's implementation
  return arr1.concat(arr2).sort((a,b) => {return a - b})
}

//! ------------------ Andrei's solution -------------------------
//! Actually depending on the compiler,
//! Andrei's solution might not work if both or the second array starts with 0.

const andreiSorted = (arr1, arr2) => {
  const mergedArray = []
  let array1Item = arr1[0]
  let array2Item = arr2[0]
  let arr1Index = 1
  let arr2Index = 1

  

  if (arr2.length === 0) {
    return arr1
  } 
  if (arr1.length === 0) {
    return arr2
  }

  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) { //? This controls for an undefined value
      mergedArray.push(array1Item)  //? So if array2Item is undefined, it doesn't go to the else
      array1Item = arr1[arr1Index] 
      arr1Index++
    } else {
      mergedArray.push(array2Item)
      array2Item = arr2[arr2Index]
      arr2Index++
    }
  }
  return mergedArray
}

console.log(ImpMergeSortedArrays(a1,a2))
console.log(decSortMergeArrs(a1,a2))
console.log(andreiSorted(a1,a2))



