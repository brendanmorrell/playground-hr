/* You have two numbers represented by linked lists. Each node contains a single digit. The digits
 * are stored in reverse order, such that the 1's digit is at the head of the list. Write
 * a function that adds the two numbers and returns the sum as a linked list with the same
 * structure.
 * EXAMPLE
 * Input: (2 -> 1 -> 5) + (5 -> 9 -> 2)
 * Output: 7 -> 0 -> 8
 *
 * The 7 is the ones digit (2 + 5).
 * The 0 is the tens digit (1 + 9, carry the 1).
 * The 8 is the hundreds digit (1 carried over + 5 + 2).
 *
 */

function Node(val) {
  this.value = val;
  this.next = null;
}
const firstLL = new Node(2);
firstLL.next = new Node(1);
firstLL.next.next = new Node(5);

const secondLL = new Node(5);
secondLL.next = new Node(9);
secondLL.next.next = new Node(2);

function addLinkedList(l1, l2) {
  if (!l1.value) return l2;
  if (!l2.value) return l1;
  function getRvsdNumberValue(ll, strNum = '') {
    if (ll.value.constructor.name !== 'Number') throw Error;
    if (ll.next) return getRvsdNumberValue(ll.next, strNum + ll.value);
    return +(strNum + ll.value)
      .split('')
      .reverse()
      .join('');
  }
  let newLLStrVals;
  try {
    newLLStrVals = (getRvsdNumberValue(l1) + getRvsdNumberValue(l2))
      .toString()
      .split('')
      .reverse();
  } catch (error) {
    return undefined;
  }
  const result = new Node(newLLStrVals.shift());
  function getHead(ll) {
    if (ll.next) return getHead(ll.next);
    return ll;
  }
  while (newLLStrVals.length) {
    getHead(result).next = new Node(newLLStrVals.shift());
  }
  return result;
}

console.log(addLinkedList(firstLL, secondLL));
module.exports = { Node, addLinkedList };
