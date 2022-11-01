  /**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let newStr = ""
  let newRev = ""

  for (let i = 0; i < s.length; i++) {

    let lowerCase = s[i].toLocaleLowerCase()
    let charcode = lowerCase.charCodeAt()

    if ((charcode > 47 && charcode < 58)  || (charcode > 96 && charcode < 123))
      {
      newStr += lowerCase
      newRev = lowerCase + newRev
    }
  }

 if (newStr === newRev) {
   return true
 } else {
   return false
 }
};