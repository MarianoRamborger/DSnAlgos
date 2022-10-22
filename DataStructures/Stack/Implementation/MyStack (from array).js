
class Stack {
  constructor() {
    this.data = []
  }

  isEmpty() {
    return this.data.length === 0 ? true : false
  }

  push(value) {
    this.data.push(value)
  }
  
  pop() {
    this.data.pop()
  }

  peek() {
    return this.data[this.data.length - 1]
  }
  
}

const myStack = new Stack()
myStack.push("resolves last")
myStack.push("resolves second")
myStack.push("resolves first")
console.log(myStack.peek())
myStack.pop()
console.log(myStack.peek())