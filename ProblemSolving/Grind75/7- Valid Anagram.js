
// Not much to say about this one. Just use a hash table to avoid nested for loops or anything like that.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  const firstWordHash = {}
  for (let i = 0; i < s.length; i++) {
    if (!firstWordHash[s[i]]) {
      firstWordHash[s[i]] = 1
    } else {
      firstWordHash[s[i]]++
    }
  }

  for (let j = 0; j < t.length; j++) {
    if (!firstWordHash[t[j]]) {
      return false
    } else {
      firstWordHash[t[j]]--
        if(firstWordHash[t[j]] === 0) {
        delete firstWordHash[t[j]]
      }
    }
    
  }

    if (Object.keys(firstWordHash).length === 0) {
      return true
    } else {
      return false
    }

};