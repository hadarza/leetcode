/*Question 876 */
/* Definition for singly-linked list.*/

// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */

const middleNode = function(head) {
  let pointerA = head;
  let pointerB = head;

  while (pointerB && pointerB.next) {
      pointerA = pointerA.next;
      pointerB = pointerB.next.next;
  }

  return pointerA;
};
module.exports = {middleNode}