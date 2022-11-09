
//! Binary search. Two solutions. The first is mine and it's a bit jumpier than the official solution
//! The second one has the advantage of avoiding possible number overflows.


/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
 var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) { //N is going to be bad, so imagine it's the size of the array.
   
      let firstBad = n //Guaranteed bad version
      let mid = Math.ceil(n/2)  //This is a binary search, so we go for the middle.
      while (true) {
        //Have we, in our search, made it back to our current lowest bad version?
        if (mid === firstBad) {
          return mid
        }

        // Is our mid a bad version? Then it becomes the current first bad version so far. From now on we won't care for any version newer than this one. We'll proceed to divide it to search for a lowest bad version
        else if (isBadVersion(mid)) {
          firstBad = mid
          mid = Math.ceil(mid/2)
        }

        //If this version is not bad, we must move to the right in search for a later, potentially bad version. To that end we'll add this version to the current first bad version, then divide by two to find the middle.
        else {
          mid = Math.ceil((mid + firstBad)/2) 
          // mid = mid +1 also works, if you want a less "jumpy" search
        }
      }
  };
};

// Step by step explanation: Suppose 4 is the first bad version
// 1, 2, 3, 4, 5.
// Get half of the first known bad version (5)=>3 becomes mid
// Search 3 => is not a bad version
// Add mid (3) and first bad version (5) then divide by two to get the middle (4)
// Are the middle and the first known bad version the same?
// Search 4 => is bad. 4 becomes the new first bad version. Half of 4 (2) becomes the middle
// Are the middle and the first known bad version the same?
// Search 2 => is not a bad version. Add mid (2) to first bad version (4) /2, 3 becomes the new mid
// Are the middle and the first known bad version the same?
// Search 3 => is not a bad version. Add mid (3) to first version (4) / 2. 4 becomes new mdi
// Are the middle and the first known bad version the same?
// Yes, so this is our target.


var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) { //N is going to be bad, so imagine it's the size of the array.
    
        //This is another way of doing it. Useful for big numbers, to prevent overflows.
        let left = 1
        let right = n

        while (left < right) {

          //! This is the key difference. Instead of using (left+right)/2 which may result in a BIG number,
          // You just take the biggest number (right), subtract left, divide by 2 and then add left.
          // You get the exact same number, but at no point you add (left+right) avoiding risk of overflow
          mid = left + (right - left) / 2

          if (isBadVersion(mid)) {
            right = mid
          }

          else {
            left = mid +1
          }
  
        }
        return left
    };
};