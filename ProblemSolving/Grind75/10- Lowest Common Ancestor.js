/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
  return getAncestor(root,p,q)
};


const getAncestor = (node,p,q) => { 

  //If both p and q are greater than the current Node, since this is a BTS, answer will be on the left
  if ((node.val > p.val) && (node.val > q.val)) {
    return getAncestor(node.left,p,q)
  }
  //Conversely, if they are smaller, the answer must be on the right
  else if ((node.val < p.val) && (node.val < q.val)) {
    return getAncestor(node.right,p,q)
  }
    
  // If both p and q are bigger or smaller than the current node, it must mean one of two scenarios
  // 1. The node has both P and Q as children or
  // 2. The node's value is either P or Q
  // Given this problem's unique constraints (Each value is unique && Both p and q exist in the BST)
  // We know that depth is irrelevant (the path exists, but only once) so there is no need for DFS
  else {
    return node
  }

  //If you want to understand a bit more about the above comment, feel free to comment out the else block 
  // above, and uncomment the following lines.
  // if ((node.val === p.val) || (node.val === q.val) || 
  // ((node.left.val === q.val) || (node.right.val === p.val)) ||
  // ((node.right.val === q.val) || (node.left.val === p.val)))
  //  {
  //   return node
  // }
}