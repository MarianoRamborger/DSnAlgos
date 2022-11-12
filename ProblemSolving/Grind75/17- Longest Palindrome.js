/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
    
  const hash = {} 

  let len = 0

  // The trick consists in not caring about the letters themselves, but only about how many times they
  // appear. So we'll begin by creating an object to store every letter.

  for (let i = 0; i < s.length; i++) { 
    if (!hash[s[i]]) { //? If the letter is not on our object, we add it
      hash[s[i]] = 1
    }
    else if (hash[s[i]] === 1) { //If it already exists, however, that means we have a pair.
      delete hash[s[i]] // So we'll use that pair for the palindrome, delete it from our object
      len +=2 //And since we added it to the palindrome, we'll increase the length by 2
    } 
  }

  // After using all pairs, we may use a single letter for the middle. 
  if (Object.keys(hash).length != 0) { //So if we have any remaining inside of our object
    len++ // We add it to the palindrome
  }

  return len // And return the length

};