class LLNode {
  constructor(value, next = null) {
    this.value = value,
    this.next = next
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head
    this.length = 1
  }

  append(value) {

    const newTail = new LLNode(value) 
    this.tail.next = newTail
    this.tail = newTail
    this.length ++
    return this.printList()
  }

  prepend(value) {
    const newHead = new LLNode(value, this.head)
      this.head = newHead
      this.length++
      return this.printList()
  }

  printList() {
    const arr = []
    let currentNode = this.head
    while (currentNode !== null) {
      arr.push(currentNode.value)
      currentNode = currentNode.next
    }
    console.log(arr)
  }

  lookUp(index) {
    let currentIndex = 0
    let currentNode = this.head
    while (currentIndex < index) {
      if (currentIndex == index - 1) {
        return currentNode
      } else {
            currentIndex++
            currentNode = currentNode.next
          }      
    }

  }

  sPrepend(value) {
    this.head = new LLNode(value,this.head)
    this.length ++
    return this
  }

  insert(value, index) {
    if (typeof(index) !== "number") {
      console.log("error"); return;
    }

    if (index === 0) {
      return this.prepend(value)
    } 
    else 
    if (index >= this.length) { 
      return this.append(value)
    }

    let prevNode = this.lookUp(index)
    prevNode.next = new LLNode(value, prevNode.next)    
  }

  delete(index) {
    if (index >= this.length) {
      console.log ("Nothing to delete"); return
    } 
      else if (index === 0) {    
        this.head = this.head.next
        this.length--
        return this.printList()
      } 
      else { //? Get previous node, give the next of the node to be deleted to it
        let prevNode = this.lookUp(index)
        let node2Delete = prevNode.next
        prevNode.next = node2Delete.next
        node2Delete = null
        this.length--
      
        return this.printList()
      }
  }
}

const myLinkedList = new LinkedList("origin")


myLinkedList.append("second-to-last")
myLinkedList.append("last")
myLinkedList.prepend("second")
myLinkedList.prepend("first")
myLinkedList.insert('middle', 2)
myLinkedList.insert('newFirst', 0)
myLinkedList.insert('verylast', 7)
myLinkedList.delete(0)
myLinkedList.delete(90)
myLinkedList.delete(6)
myLinkedList.delete(5)

