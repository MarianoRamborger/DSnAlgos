
const aString = "siht gnisrever ma I"
const notAString = 9000001

//? Imperative way
const reverseString = (string)  => { //Temproal O(n)
  if (string) {
    if (typeof(string) !== 'string') {
      string = string.toString()
    }

    let reversedString = ''
    for (let i = string.length - 1; i >= 0; i --) {
      reversedString += string[i]
    }
    return reversedString
  }

}

//? Declarative way
const decReverseStr = (str) => {
  //? treat str like array, split it in n-lenght elements, reverse it, join it without spaces
  return str.split('').reverse().join('')
}

//? Modern declarative way, no need to split thanks to the spread operator
const fancyDecReverseStr = str => [...str].reverse().join('')





console.log(reverseString(aString))
console.log(decReverseStr(aString))
console.log(fancyDecReverseStr(aString))
// console.log(reverseString(notAString))
