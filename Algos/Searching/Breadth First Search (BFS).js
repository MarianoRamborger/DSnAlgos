class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(value){
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while(true){
        if(value < currentNode.value){
          //Left
          if(!currentNode.left){
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //Right
          if(!currentNode.right){
            currentNode.right = newNode;
            return this;
          } 
          currentNode = currentNode.right;
        }
      }
    }
  }
  lookup(value){
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while(currentNode){
      if(value < currentNode.value){
        currentNode = currentNode.left;
      } else if(value > currentNode.value){
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return null
  }
  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while(currentNode){
      if(value < currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if(value > currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!
        
        //Option 1: No right child: 
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            
            //if parent > current value, make current left child a child of parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            
            //if parent < current value, make left child a right child of parent
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
        
        //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if(parentNode === null) {
            this.root = currentNode.right;
          } else {
            
            //if parent > current, make right child of the left the parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            
            //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
        
        //Option 3: Right child that has a left child
        } else {

          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while(leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }
          
          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if(parentNode === null) {
            this.root = leftmost;
          } else {
            if(currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
      return true;
      }
    }
  }
  breadthFirstSearch() { 
    //? Use a queue to keep a list of the nodes you have yet to touch.
    let currentNode = this.root;
    let list = [] //? final list
    let queue = []; // To keep track of the children of the level.

    queue.push(currentNode)

    while (queue.length > 0) { //? While there are items in the queue
      currentNode = queue.shift() //? we take the first item from the queue
      list.push(currentNode.value) //? add the current to the queue

      //? Now just add to the queue the children of the current node.
      if (currentNode.left) { 
        queue.push(currentNode.left)
      }
      if (currentNode.right) {
        queue.push(currentNode.right)
      }
    }
    return list
  }

  recursiveBreadthFirstSearch(queue = [this.root] , list = []) {
    if (queue.length === 0) {
      return list
    } 
    const currentNode = queue.shift()

    list.push(currentNode.value)
    
    if (currentNode.left) {
      queue.push(currentNode.left)
    }
    if (currentNode.right) {
      queue.push(currentNode.right)
    }

    return this.recursiveBreadthFirstSearch(queue,list)
  }
  DepthFirstSearchInOrder() {

    return traverseInOrder(this.root, [])

  }
  DepthFirstSearchPreOrder() {
    
    return traversePreOrder(this.root, [])

  }
  DepthFirstSearchPostOrder() {
    
    return traversePostOrder(this.root, [])
  }

  
}

const traverseInOrder = (node,list) => {
  //Goes to the bottom and builds the tree from bottom to top, left to right.
  if (node.left) {
    traverseInOrder(node.left, list) //This will always look for the leftmost child.
  }
  list.push(node.value)

  if (node.right) {
    traverseInOrder(node.right, list) //Move to the right once
  }
  return list
}

const traversePreOrder = (node,list) => {
  //Starts with the parents, so
  list.push(node.value) //We push first
  if (node.left) {
    traversePreOrder(node.left, list) //This will always look for the leftmost child.
  }
  if (node.right) {
    traverseInOrder(node.right, list) //Move to the right once
  }
  return list
}

const traversePostOrder = (node,list) => {
  //Reaches for the leaves first, then works its way up leaving the root for the very last.
  //Why it works?

  if (node.left) {
    //It will reach the leftmost child
    traversePostOrder(node.left, list) 
  }
  if (node.right) {
    traversePostOrder(node.right, list) //Move to the right once
  }

  list.push(node.value) 
  return list
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
// tree.remove(170)
JSON.stringify(traverse(tree.root))
// console.log(tree.breadthFirstSearch())
// console.log(tree.recursiveBreadthFirstSearch())
console.log(tree.DepthFirstSearchInOrder())
console.log(tree.DepthFirstSearchPreOrder())
console.log(tree.DepthFirstSearchPostOrder())

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}