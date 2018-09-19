/**
 * Write a function deleteDups that removes duplicates from an unsorted linked list.
 *
 * Example:
 * 1->2->3->3
 *
 * deleteDups(head); -> 1->2->3
 *
 * Extra:
 * How would you solve this problem if a temporary buffer is not allowed?
 */
function Node(value) {
  this.value = value;
  this.next = null;
}
const LL = new Node(1);
LL.next = new Node(2);
LL.next.next = new Node(3);
LL.next.next.next = new Node(3);
LL.next.next.next.next = new Node(1);
console.log(LL);

function deleteDups(head) {
  if (!head || !head.next) return head;
  function Node(value) {
    this.value = value;
    this.next = null;
  }
  let count = 0;
  const values = [];
  function traverseLL(node) {
    if (!node) return;
    if (count === 5) return;
    if (!values.includes(node.value)) values.push(node.value);
    return traverseLL(node.next);
  }
  traverseLL(LL);
  function createLL(node, i = 1) {
    if (i > values.length - 1) return;
    node.next = new Node(values[i]);
    createLL(node.next, i + 1);
  }
  const newLL = new Node(values[0]);
  createLL(newLL);
  return newLL;
}

console.log(deleteDups(LL));

module.exports = deleteDups;

function deleteDups2() {
  // traverse through getting a list of values
  // make note of all indexes where a duplicate exists (after the first encounter)
  // traverse a second time, but this time, i
}
