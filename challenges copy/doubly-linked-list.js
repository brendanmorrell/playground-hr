/*
Create a doubly linked list with an add and remove method
 */

function LinkedList() {
  this.head = null;
  this.tail = null;
}

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/*
Adds a node to the end of the list
 */
LinkedList.prototype.add = function(val) {
  if (!this.head) {
    this.head = new Node(val);
    this.tail = this.head;
  } else if (this.tail && !this.tail.next) {
    this.head = new Node(val);
    this.head.prev = this.tail;
    this.tail.next = this.head;
  } else {
    this.head.next = new Node(val);
    let temp = this.head;
    this.head = this.head.next;
    this.head.prev = temp;
  }
};

/*
Removes the first node with the inputted value
 */
LinkedList.prototype.remove = function(val) {
  function removeNode(node) {
    if (node.val === val) {
      if (node.next && node.prev) {
        node.next.prev = node.prev;
        node.prev.next = node.next;
      } else if (node.prev) {
        node.prev.next = null;
      } else {
        node.next.prev = null;
      }
      return val;
    } else if (node.next) {
      return removeNode(node.next);
    }
    return undefined;
  }
  return removeNode(this.tail);
};

const LL = new LinkedList();
LL.add(1);
LL.add(2);
LL.add(3);
LL.add(4);
console.log(LL.tail.next);
module.exports = LinkedList;
