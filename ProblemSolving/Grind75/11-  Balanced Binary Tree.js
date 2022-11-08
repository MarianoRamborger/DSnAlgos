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
 * @return {boolean}
 */
var isBalanced = function(root) {
  if ((root == null) || (!root.left && !root.right)) {
    return true
  }
  


  if (DFS(root) > -1) {
    return true
  } else {
    return false
  }


}

const DFS = (node) => {
  if (!node) {
    return 0 //We reached a leaf, which is balanced and thus returns 0.
    //It knows that itself is balanced, and doesn't really have a level
  }

  let left = DFS(node.left)
  let right = DFS(node.right)

  // If the tree is already unbalanced, just return -1, don't make any more unnecesary calculations.
  if ((left == -1) || (right == -1)) {
    return -1
  }
  // If the absolute difference in height between left and right is > 1, just return -1
  if (Math.abs(left - right) > 1) {
    return -1
  }

  // So, if the tree is still balanced, return the biggest of both subtrees,
  // Because we are returning the maximum depth of that subtree
  // Also add +1, because that way each level is adding it's immediate children
  // to the count for its maximum depth
  console.log("This is node", node.val, " and its height is ",
  Math.max(left,right) + 1
  )
  return Math.max(left,right) + 1
}
