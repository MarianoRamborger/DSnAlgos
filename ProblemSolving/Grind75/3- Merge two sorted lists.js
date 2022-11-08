
//! I suffered A LOT with this excercise despite knowing exactly how to do it
//! why? Because I didn't use the ListNode class/function
//! Each one is a node, and its very important for the desire output
//! besides that, problem is as simple as they come, you just
//! Create a list, with a head, then loop while the lists are !== null
//! append the lower value from the lists to the newList.next
//! then of course newList becomes the newList.next
//! and you advance one node in the list you took the current node from
//! after that is just a matter of checking the case that one list is bigger than the other.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */



 var mergeTwoLists = function(list1, list2) {

  let newList = new ListNode()
  let head = newList

  while (list1 !== null && list2 !== null) {

    if (list1.val <= list2.val) {
      newList.next = new ListNode(list1.val)
      list1 = list1.next
    } else {
      newList.next = new ListNode(list2.val)
      list2 = list2.next
    }

    newList = newList.next

  }

  if (list1 !== null) {
    newList.next = l1
  }

    if (list2 !== null) {
    newList.next = list2
  }
  
  //Because the first node of the list is 0 by default
  return head.next


    
};