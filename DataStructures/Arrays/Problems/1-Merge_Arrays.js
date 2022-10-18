//Given two sorted arrays, can you merge them in one such as still sorted?

const a1 = [0,3,4,10001]
const a2 = [2,4,99,1235]

//!------------------------ MY SOLUTIONS (blind) --------------------------
//? Imperative way
//TODO gameplan, iterate thru both arrays, progressively compare numbers so smaller goes into array.
//TODO once we make it to the end of an array, we concatenate what remains of the longer one
const ImpMergeSortedArrays = (arr1, arr2) => {

  const newArray = []
  let a1Idx = 0; let a2Idx = 0;

  while ((a1Idx < arr1.length) && (a2Idx < arr2.length)) {
   
      if (arr1[a1Idx] < arr2[a2Idx]) {
        newArray.push(arr1[a1Idx])
        a1Idx++;
      } 
      else {
        newArray.push(arr2[a2Idx])
        a2Idx++;
      }   
  }
   //Once you reached the end of one array, append the rest of the other one.
    if (a1Idx < arr1.length) {
      return newArray.concat(arr1.slice(a1Idx))
    } else {
      return newArray.concat(arr2.slice(a2Idx))
    }
}

//? Declarative sorting way 
const decSortMergeArrs = (arr1,arr2) => { //? Temporal complexity depends on browser's implementation
  return arr1.concat(arr2).sort((a,b) => {return a - b})
}

//! ------------------ Andrei's solution -------------------------

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