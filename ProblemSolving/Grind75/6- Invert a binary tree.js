
//? This wasn't hard at all, actually. Just traverse the the tree and invert the left and right children as you go
 /**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

const invertTree = (currentNode = root) => {
  if (!currentNode) {
    return null //This base case prevents everything from crashing.
  }
   else {
    // if ((currentNode.left) && (currentNode.right)) {
      let cacheL = currentNode.left || null
      let cacheR = currentNode.right || null
      currentNode.left = cacheR
      currentNode.right = cacheL
    // } 

    if (currentNode.right) {
      invertTree(currentNode.right)
      
    }
    if (currentNode.left) {
      invertTree(currentNode.left)
    }  
    
  }
  return currentNode
}

