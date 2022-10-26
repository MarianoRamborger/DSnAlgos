//! My solution (blind). Figured recursivity would be a nice idea.
//! The nonrecursive version is pretty similar but uses a while(true) to avoid recursivity
//! Probably iterative solution is a bit more efficient though

class bstNode {
  constructor(value, left = null, right = null){
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(value, currentNode = this.root){
    //? Empty tree case
    if (!this.root) {
      let newNode = new bstNode(value)
      this.root = newNode
      return newNode
    }

    else if (value > currentNode.value) {

      if (!currentNode.right) {
        let newNode = new bstNode(value)
        currentNode.right = newNode
        return newNode
      } 
        else {
          return this.insert(value, currentNode.right)
      }
    }
    
    else if (value <= currentNode.value) {

       if (!currentNode.left) {
        let newNode = new bstNode(value)
        currentNode.left = newNode
        return newNode  
       } 
        else {
          return this.insert(value, currentNode.left)
       }
    }
    
  }
  lookup(value, currentNode = this.root, level = 1){
    if (!currentNode) {
      return null
    }
    if (currentNode.value === value) {
      console.log ("Found in Level:", level)
      return currentNode
    }

    else if (value > currentNode.value) {
      if (!currentNode.right) {
        return null
      }
      else {
        return this.lookup(value, currentNode.right, level = level + 1)
      }
    }
    else if (value < currentNode.value) {
        if (!currentNode.left) {
          return null
        }
        else {
          return this.lookup(value, currentNode.left, level = level + 1)
        }
    }

  }


  fetchParent(value) { //? Not a classic method, but helps the delete one
    let result = {
      parent : this.root,
      target : null,
      direction : null
    }

  
    if ((!result.parent.right) && (!result.parent.left)) {
      result.parent = null
      return result
    }


    while (true) {

      
      if (value <= result.parent.value) {
        if (!result.parent.left) {
          return result
        }
        else if (result.parent.left.value === value) {
          result.target = result.parent.left
          result.direction = 'left'
          return result
        } 
          else {
            result.parent = result.parent.left
          }    
      }

      else if (value > result.parent.value) {
        if (!result.parent.right) {
          return result
        }
        else if (result.parent.right.value === value) {
          result.target = result.parent.right
          result.direction = 'right'
          return result
        } else {
          result.parent = result.parent.right
        }
      }
    
      
    }
  }

  findSucessor(node, predecessor) {
    
    if (node.left === null) {
      let res = {
        sucessor: node,
        predecessor: predecessor
      }
      return res
    } else {
      return this.findSucessor(node.left, node)
    }

  }

  remove(value) {

    if (!this.root) {
      console.log("Nothing to remove")
      return null
    } 

    if (this.root.value == value) {
      if ((this.root.right) && (!this.root.left)) {
        this.root = this.root.right
      }
      else if ((!this.root.right) && (this.root.left)) {
        this.root = this.root.left
      }
      else {
        //Get the sucessor
        
        let {sucessor, predecessor} = this.findSucessor(this.root.right, this.root) 
        //If the successor is the node right of the root, meaning is a 2 levels tree..
        if (this.root.right.value === sucessor.value) {
          sucessor.left = this.root.left
          this.root = sucessor
        } else {
          // Else if we are on a tree with 3 or more levels...
          sucessor.left = this.root.left
          sucessor.right = this.root.right
          this.root = sucessor
          predecessor.left = null
          // We give the successor the left and right of the root, then make it the root.
          // Then we take the sucessor from its parent
        }

      }
    }

    else {
      const {parent, target, direction} = this.fetchParent(value)

      if (!target) {
        "nothing to delete"
        return null
      }
      
      //Case wanna kill a leaf
        if ((!target.left) && (!target.right)) {
          console.log("deleting")
          parent[direction] = null
        }

      //Case target has no right child
       else if (!target.right) {
        parent[direction] = target.left
      }

      //Case target has no  left child
      else if (!target.left) {
          parent[direction] = target.left
        }

      // Case target has two children
      // Find the inorder sucessor, or in simpler terms
      // Find the smallest key that's still bigger than the key to delete.
      //! this is accomplishing moving one node to the right, then as much to the left as possible.
      else {

        let { sucessor, predecessor  }= this.findSucessor(target.right, target) 
       
        //! If the target is on a second to last level, 
        if (target.right.value === sucessor.value) {  
          //! Then the sucessor inherits the left side, and the parent to the right adopts it
           sucessor.left = target.left
           parent[direction] = sucessor
        }
        else {
          //! if the sucessor is at least 2 levels below, it means is a leftmost node
          sucessor.left = target.left
          sucessor.right = target.right
          parent[direction] = sucessor
          predecessor.left = null
          //! so it just needs to inherit both directions from the target, 
          //! then remove it from predecessor and give it to the parent of the deletion target
  
        }     
      }
    } 

  }
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
// tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
// tree.insert(150)
// tree.insert(190)



JSON.stringify(traverse(tree.root))

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}



//!-------------------------------------------------------------------------------


tree.remove(9)
console.log(tree)