/**
 * Write a function for reversing a linked list.
 * Your function will have one input: the head of the list
 * Your function should return the new head of the list
 *
 * BONUS:
 * Do it in place
 *
 */

const LL = new Node(1);
LL.next = new Node(2);
LL.next.next = new Node(3);
LL.next.next.next = new Node(4);
LL.next.next.next.next = new Node(5);

function Node(value) {
  this.value = value;
  this.next = null;
}

function reverseLinkedList(head) {
  const valuesArr = [];
  function grabValues(LL) {
    if (!LL) return;
    if (LL) valuesArr.push(LL.value);
    grabValues(LL.next);
  }
  grabValues(head);
  const reversedVals = valuesArr.reverse().concat(null);
  const newLL = new Node(reversedVals[0]);
  function addValToLL(node, i = 1) {
    const value = reversedVals[i];
    if (value) {
      node.next = new Node(value);
      addValToLL(node.next, i + 1);
    } else {
      node.next = value;
    }
  }
  addValToLL(newLL);
  return newLL;
}
console.log(reverseLinkedList(LL));
module.exports = { Node, reverseLinkedList };
