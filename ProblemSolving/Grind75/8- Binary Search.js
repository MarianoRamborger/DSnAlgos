/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
  
  // Check for empty arrays
  if (nums.length === 0) { 
    return -1
  } 


  let leftLimit = 0
  let rightLimit = nums.length -1
  let mid = Math.floor(nums.length /2)


  //Binary search can perform poorly if the target is at the beginning
  //And the end, lets discard that
  if (target === nums[leftLimit]) {
    return leftLimit
  }
  else if (target === nums[rightLimit]) {
    return rightLimit
  }


  while (true) {

      if (nums[mid] === target) {
        return mid
      }

    //? If the target is smaller than the "mid", former mid becomes new upper bound
    else if (target < nums[mid]) {
      rightLimit = mid
      mid = Math.floor((leftLimit + rightLimit)/2)
      
      //? If the new mid is equal to the right limit, our number is not in the list
      if (mid === rightLimit) {
        return -1
      }
    }

    //? If the target is greater than the "mid", former mid becomes new lower bound
    else if (target > nums[mid] ) {
      leftLimit = mid
      mid = Math.floor((leftLimit + rightLimit)/2)
      //? If the new mid is equal to the left limit, our number is not in the list
      if (mid === leftLimit) {
        return -1
      }
    }

  }
};