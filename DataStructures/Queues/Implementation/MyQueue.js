class qNode {
  constructor(value, next = null){
    this.value = value;
    this.next = next;
  }
}

class Queue {
    constructor() {
      this.first = null;
      this.last = null;
      this.length = 0;
    }

    isEmpty() {
      return this.length == 0 ? true : false
    } 

    peek() {
      return this.first || "Q's empty"
    }

    enqueue(value) {
      let newNode = new qNode(value)
      if (this.isEmpty()) {
        this.first = newNode
        this.last = newNode
      } else {
        this.last.next = newNode
        this.last = newNode
      }
      this.length++
    }

    dequeue() {
      if (this.isEmpty()) {
        return "Q's empty"
      }
       else if (this.length === 1) {
        this.first = null
        this.last = null
        this.length = 0
      } 
        else {
          this.first = this.first.next
          this.length--
        }       
    }

    lookup() {
      if (this.isEmpty()) {
        return "Q's empty"
      } else {
        let currentNode = this.first
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

  const myQueue = new Queue()
  console.log(myQueue.peek())
  myQueue.enqueue("first")
  myQueue.enqueue("second")
  myQueue.enqueue("third")
  console.log(myQueue.lookup())
  myQueue.dequeue()
  console.log(myQueue.lookup())
  myQueue.dequeue()
  myQueue.dequeue()
  console.log(myQueue.lookup())