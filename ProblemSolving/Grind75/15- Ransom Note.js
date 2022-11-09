// # Intuition
// Store letters of the first word into hash table, iterate through second word and see if the hash table had the right amount and type of letters to construct it.

// # Approach
// Same as intuition.

// # Complexity
// - Time complexity: O(n+m) since we have two for loops, with different input sets.

// - Space complexity: It's debatable. We are creating a hash table for the first word, which can have up to 26 different keys. Even for very, very long words, the values won't be too big. So one could argue that it's O(1) 
// # Code
// 
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote,magazine) {
    
    const magazHash = {} //We create an object to store the letters of magazine

    for (let i = 0; i < magazine.length; i++) { //We iterate thru magazine
      if (!magazHash[magazine[i]]) { 
        magazHash[magazine[i]] = 1 // If it's a new letter, we set its value to one.
      } else {
        magazHash[magazine[i]]++ // If not we increase it by one
      }
    }
    
    for (let i = 0; i < ransomNote.length; i++) { // We iterate thru the letters of ransomNote
      if (!magazHash[ransomNote[i]]) {  //If we don't find the letter on our magazine dictionary
        return false // That means the word cannot be constructed, we return false
      } else {
        magazHash[ransomNote[i]]-- //But if we do find it, we remove it from our magazine dictionary
      }
    }

    return true //If we have reached this point, it means the ransom note could be constructed.
};
