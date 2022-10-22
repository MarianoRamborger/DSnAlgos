
class DLLNode {
  constructor(value, prev = null, next = null) {
    this.value = value,
    this.prev = prev,
    this.next = next
  }
}

class DoubleLinkedList {
  constructor(value) {
    let initNode = new DLLNode(value)
    this.head = initNode
    this.tail = initNode
    this.length = 1
  }

  print() {
    let DLL = []
    let currentNode = this.head
    while (currentNode !== null) {
      DLL.push(currentNode.value)
      currentNode = currentNode.next
    }
    console.log(DLL)
  }

  lookup(targetIdx, reverse = false) {
    let Idx = !reverse ? 0 : this.length - 1
    let currentNode = !reverse ? this.head : this.tail   

      if (targetIdx >= this.length) {
        return this.tail
      }
        else {
          if (!reverse) {
            while (targetIdx !== Idx) {
              Idx++
              currentNode = currentNode.next
            }
          } 
            else {
              while (targetIdx !== Idx) {
                Idx--
              currentNode = currentNode.prev
              }
            }
            return currentNode
        }
  }

  append(value) {
    let newTail = new DLLNode(value,this.tail,null)
    this.tail.next = newTail
    this.length++
    this.tail = newTail
  }

  prepend(value) {
    let newHead = new DLLNode(value,null,this.head)
    this.head.prev = newHead
    this.length++
    this.head = newHead
  }

  insert(Idx,value,reverse = false) {
    if (Idx === 0) {
      return this.prepend(value)
    }
      else if (Idx >= this.length) {
        console.log("running append")
        return this.append(value)
      } 
        else if (typeof(Idx) !== 'number') {
          return "Error"
      } else {
        //clearer code
        const nextNode = this.lookup( Idx, reverse )
        const prevNode = nextNode.prev
        const newNode = new DLLNode(value,prevNode,nextNode)
        prevNode.next = newNode
        nextNode.prev = newNode
        this.length++
        return   
        //spatial complexity is king
          //  const targetIdx = this.lookup( Idx, reverse )
          // const newNode = new DLLNode(value, targetIdx.prev, targetIdx)
          // targetIdx.prev.prev = newNode
          // targetIdx.prev.next = newNode
      }
  }
  delete(Idx, reverse = false) {

    if (Idx == 0) {
      this.head = this.head.next
      this.head.prev = null
      this.length--
      console.log("insta deleting first")
    } 
      else if (Idx == this.length - 1) {
        this.tail = this.tail.prev
        this.tail.next = null
        this.length--
        console.log("insta deleting last")
    } 
      else {
        const node2Delete = this.lookup(Idx,reverse)
        const prevNode = node2Delete.prev
        const nextNode = node2Delete.next
        prevNode.next = nextNode
        nextNode.prev = prevNode
        this.length--
    }

    
  }

  

}

const MyDLL = new DoubleLinkedList(10)

MyDLL.append("Second-to-Last")
MyDLL.append("Last")
MyDLL.prepend("Second")
MyDLL.prepend("First")
MyDLL.print()
MyDLL.insert( 4,"almostLast")
MyDLL.delete(5)
MyDLL.delete(0)
MyDLL.print()
MyDLL.delete(1)
// MyDLL.insert(0,"VeryFirst", true)
// MyDLL.insert(2,"Third", true)
MyDLL.print()
