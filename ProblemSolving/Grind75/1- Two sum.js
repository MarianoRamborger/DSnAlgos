// https://leetcode.com/problems/two-sum/description/

//add any 2 numbers of array to make target
//! naive solution: nested for loop

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
  //? same solution than the google example interview
  const seenNumbers = {
    //populate this hash table with
    // number: index
  }

  for (let i = 0; i < nums.length; i++) { //? Iterate thru array of numbers
    let difference = target - nums[i] 
    //? Calculate the difference between the target and the current number

    //? the number I'm searching for, have i seen it before? If so, must be a key in the hash table
    if (seenNumbers[difference] !== undefined) { 
      
      return [seenNumbers[difference], i]
    } else { //? If not, lets add number:index to the hash table
      seenNumbers[nums[i]] = i
    }
  }  
  console.log(seenNumbers)
};