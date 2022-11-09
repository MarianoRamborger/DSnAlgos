

//? I managed to solve this problem with the uncommented method. However I realized that my method
//? Doesnt quite get the "O(1) Spatial complexity" Since I'm adding a property to each node. Even worse,
//? The other approach would involve creating a set or a hash.
//? So that would be the naive solution. 
//! The non-naive solution uses the Floyd's cycle finding algorithm,
//! Also called the tortoise and the hare algorithm.

//! TORTOISE AND HARE SOLUTION


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
    return false //? No cycle if we don't have any nodes
  } 
  else {
    let slowPointer = head //This node is the turtoise. It'll move 1 node each cycle
    let fastPointer = head //This the hare, it will mode 2 nodes each cycle
    while (fastPointer) {  //? If, we reach the end of the linked list, it means its not cyclical.

      if (!fastPointer.next) { //? This ensures we don't hit an error when making fastpointer.next.next
        return false  //? Cause fastpointer.next is bound to exist, even if its null. 
      }   //? But .next.next only exists if .next exists
      else {   
        fastPointer = fastPointer.next.next //? Fast pointer advances twice as fast...
        
        if (fastPointer === slowPointer) return true //? So if the list is a cycle, it'll eventually reach slowPointer
        
        slowPointer = slowPointer.next //? Slow pointer moves at half the speed to the fast one can eventually catch it.
      }
    }
    return false //? If we managed to reach this point, its only becasue fastpointer reached the end of the list.
  } 
};










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