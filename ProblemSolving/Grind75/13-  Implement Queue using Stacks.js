class MyQueue  {
  //? So basically
  //? If reading is empty, write to readingStack, if not, write to writingStack
  //? If popping and readingStack has more than 1 item, just pop it.
  //? If it has one item, do pop it, but then pop everything from writing and push it into
  //? readingStack. Then all the items will be ordered
  //? rinse and repeat until reading has nothing inside
 
   constructor() {
       this.readingStack = []
       this.writingStack = []
  
   }
   
   push(value) {
   
       if (this.readingStack.length === 0) {
           this.readingStack.push(value)
           
       } else {
           this.writingStack.push(value)
       }
 
       return null
 
     
   }
 
   pop() {
 
       if (this.readingStack.length === 0) {
           return null
       }
       else if (this.readingStack.length > 1) {
           return this.readingStack.pop()
       }
         else {
             
             let popped = this.readingStack.pop()
     
             while (this.writingStack.length > 0) {
                 this.readingStack.push(this.writingStack.pop())
             }   
             return popped
         }
 
       
   }
 
   peek() {
       return this.readingStack[this.readingStack.length - 1]
   }
 
   empty() {
    
       if (this.readingStack.length === 0) { 
           return true
       } else {
           return false
           }
   }
   
 };
 
 // /** 
 //  * @param {number} x
 //  * @return {void}
 //  */
 // MyQueue.prototype.push = function(x) {
   
 // };
 
 // /**
 //  * @return {number}
 //  */
 // MyQueue.prototype.pop = function() {
   
 // };
 
 // /**
 //  * @return {number}
 //  */
 // MyQueue.prototype.peek = function() {
   
 // };
 
 // /**
 //  * @return {boolean}
 //  */
 // MyQueue.prototype.empty = function() {
   
 // };
 
 /** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */