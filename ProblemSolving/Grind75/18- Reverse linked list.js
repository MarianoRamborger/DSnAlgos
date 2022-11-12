/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {

  if (!head) { // If there is no list we return null.
    return null
  }
  else if (!head.next) { // If it's just a node we return it.
    return head
  } 

  let currentNode = head
  let prev = null
  let newHead = null
  while (currentNode) { // We are going to traverse the list until we reach null
    cacheNext = currentNode.next //We cache the next node, since we'll lose the reference otherwise
    currentNode.next = prev // Our current node will point to the previous node
    prev = currentNode // and then will become the previous node
    currentNode = cacheNext // our cached next node will become the current node for next cycle
    newHead = cacheNext || newHead //And the last visited node becomes the new head.
    //There is a trick however. On the last node, .next would be null, which would risk making null the new
    // head. We could check if next is null, but that would be an additional check each time. 
    // js lets us use assign another value in case of null, which comes in handy.
  }
  return newHead    
};