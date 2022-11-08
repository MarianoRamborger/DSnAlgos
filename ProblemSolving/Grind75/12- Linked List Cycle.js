

//? I managed to solve this problem with the uncommented method. However I realized that my method
//? Doesnt quite get the "O(1) Spatial complexity" Since I'm adding a property to each node. Even worse,
//? The other approach would involve creating a set or a hash.
//? So that would be the naive solution. 
//! The non-naive solution uses the Floyd's cycle finding algorithm,
//! Also called the tortoise and the hare algorithm.

//! TORTOISE AND HARE SOLUTION













//! NAIVE SOLUTIONS

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
  if (!head) {
    return false
  } 

  // else {

  //   let currentNode = head
  //   while (currentNode) {

  //     if (currentNode.visited) {
  //       return true
  //     } else {
  //       currentNode.visited = true
  //       currentNode = currentNode.next
  //     }
  //   }
  //   return false

  // }

  else {

    let currentNode = head
    let set = new Set()
    while (currentNode) {

      if (set.has(currentNode)) {
        return true
      } else {
        set.add(currentNode)
        currentNode = currentNode.next
      }
    }
    return false

  }
    
};