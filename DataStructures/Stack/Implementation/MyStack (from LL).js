//? My stack from a LL

//? Push: Add element, it becomes next top, referencing previous top (newest->older->oldest)
//? Pop: The top's next becomes the new top (newest|  older-> oldest )

class sNode {
  constructor(value, next = null){
    this.value = value;
    this.next = next;
  }
}

class Stack {
    constructor() {
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }

    isEmpty() {
      return this.length == 0 ? true : false
    }

    push(value) {
      if (this.isEmpty()) {
        const newNode = new sNode(value)
        this.top = newNode
        this.bottom = newNode
      } else {
        // A new top is added, which holds the reference to the previous top
        this.top = new sNode(value, this.top)
      }
      
      this.length++
    }

    pop() {
      if (this.isEmpty()) {
        return "Stack is empty"
      } 
        else if (this.length === 1) {
          this.top = null
          this.bottom = null
          this.length = 0
      } 
        else {
          this.top = this.top.next
          this.length--
          return this.top
        }
    }

    peek() {
      return this.top.value
    }

    lookup() {
      if (this.isEmpty()) {
        return "Stack empty"
      } else {
        let currentNode = this.top
        let valueArr = []
        let idx = 0

        while (idx < this.length) {
          valueArr.push(currentNode.value)
          currentNode = currentNode.next
          idx++
        }
        return valueArr
      }
 
    }

}




const myStack = new Stack()
console.log(myStack.isEmpty())
myStack.push("resolves last")
myStack.push("resolves third")
myStack.push("resolves second")
myStack.push("resolves first")
console.log(myStack.lookup())
console.log(myStack.pop())
console.log(myStack.lookup())
console.log(myStack.pop())
console.log(myStack.pop())
console.log(myStack.lookup())


