/* Merge two linked lists so that their nodes alternate. Let the first node of the zipped list be
 * the first node of the first argument, if it exists.
 * Implement the linked list using only a Node class. No need for a wrapper LinkedList class
 *
 * BONUS: Do this in place
 */

function Node(val) {
  this.value = val;
  this.next = null;
}

function zip(l1, l2) {
  function addToLastNode(linkedList, value) {
    let currentNode = linkedList;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(value);
    return linkedList;
  }

  if (!l1.value && !l2.value) return new Node(undefined);
  if (!l1.value || !l2.value) return l1.value ? l1 : l2;
  const zippedLL = new Node(l1.value);
  zippedLL.next = new Node(l2.value);

  let currentNode1 = l1.next;
  let currentNode2 = l2.next;
  while (currentNode1 || currentNode2) {
    if (currentNode1) {
      addToLastNode(zippedLL, currentNode1.value);
      console.log(zippedLL);

      currentNode1 = currentNode1.next;
    }
    if (currentNode2) {
      addToLastNode(zippedLL, currentNode2.value);
      currentNode2 = currentNode2.next;
    }
  }
  return zippedLL;
}

module.exports = { Node, zip };
