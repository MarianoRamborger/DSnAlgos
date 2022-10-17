//? If a char from array 1 exists in array 2
//? return true 
//? else return false
let arr1 = ['a','b', 'b', 'v','i'] ; let arr2 = ['t','h','m','n'] ; let arr3 = ['x','v','w','z']

// ? The Naive Approach
const findMatchNaive = (ar1,ar2) => { //! O(n^m) => O(n^2)

    for (let i = 0; i < arr1.length; i++)  {
      if (ar2.includes(ar1[i])) {
        return true
      }
    }
    return false

}

//? The hash table approach

const findMatchHash = (ar1 = [], ar2 = []) => { //! O(n+m) => O(n)

   /* Convert array 1 to an Object with this structure:
   ar1 ==> obj {
    a:true , b:true, b:true, i; true
   } */
   /* 
    Then we iterate through ar2 and see if ar2[i] === object.properties
   */

  //! Create hash table
  let hash = {}


  //! Populate the hash table
  for (let i = 0; i < ar1.length; i++) {
    hash[ar1[i]] = true
  }

  //! Loop through second array checking for values
  for (let n = 0; n < ar2.length; n++) {
    if (hash[ar2[n]]) {
      return true    
    }
  }
    return false
    
}

// console.log(findMatchNaive(arr1,arr2))
// console.log(findMatchNaive(arr1,arr3))


console.log(findMatchHash(arr1,arr2))
console.log(findMatchHash(arr1,arr3))
