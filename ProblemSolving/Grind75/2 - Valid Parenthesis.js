/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {

  //? Not valid if it starts closing, let's save ourselves the trouble
    if (s[0] === '}' || s[0] === ']' || s[0] === ')') {
      return false
    }
 
   const stack = []
 
   for (i = 0; i < s.length; i++) {
     let element = s[i] 
 
     //? Each opening bracket enters the stack, they can nest as much as they want
     
     if (element === '(' || element === '[' || element == '{') {
       stack.push(element)
 
     } else {
 
       // However the closing brackets should only match the topmost bracket in the stack
       // If they do, just remove the topmost bracket and keep going thru the stack
        // If they don't, that's an invalid sequence
 
       if (stack[stack.length-1] === '(' && element === ')') {
         stack.pop()
       }
       else if (stack[stack.length-1] === '[' && element === ']') {
         stack.pop()
       }
       else if (stack[stack.length-1] === '{' && element === '}') {
         stack.pop()
       } else {
         return false
       }
     }
   }
 
     //So if the stack is empty it means every opening bracket had a proper closing bracket
     if (stack.length === 0) {
       return true
     } else {
       return false
     }
 };