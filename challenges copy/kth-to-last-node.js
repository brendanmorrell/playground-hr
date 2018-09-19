function Node(val) {
  this.value = val;
  this.next = null;
}

function kthToLastNode(k, head) {
  if (!(!Array.isArray(head) && typeof head === 'object' && !!head && Object.keys(head).filter(x => x === 'next').length)) return undefined;

  function findLinkedListLength(head) {
    if (!head.next) {
      return 1;
    }
    return 1 + findLinkedListLength(head.next);
  }

  function returnNthNode(n, head) {
    if (n === 1 || !head.next) {
      return head;
    }
    return returnNthNode(n - 1, head.next);
  }

  let length = findLinkedListLength(head);

  if (k >= length + 1) {
    return undefined;
  }

  if (k < 1) {
    return undefined;
  }
  return returnNthNode(length + 1 - k, head);
}

module.exports = {
  Node: Node,
  kthToLastNode: kthToLastNode
};
