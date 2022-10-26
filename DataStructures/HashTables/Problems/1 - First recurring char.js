
//! ---- My solution (blind) -----
//! O(n)
const firstRecurringCharacter = (arr) => {
  const hash = {}

  for (let i = 0; i < arr.length; i++) {
    
    if (hash[arr[i]]) {
      return arr[i]
    } 
    else {
      hash[arr[i]] = true //? a bool is easier on memory than a str or int could be (1byte vs 8bytes)
    }
  }

  return undefined
}

console.log(firstRecurringCharacter([2,5,1,2,3,5,1,2,4]))
console.log(firstRecurringCharacter([2,1,1,2,3,5,1,2,4]))
console.log(firstRecurringCharacter([2,3,4,5]))
console.log(firstRecurringCharacter([2,5,5,2,3,5,1,2,4]))

//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2