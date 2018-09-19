class HashTable {
  constructor(size) {
    this.size = size;
    this.hashMap = new Array(size);
  }
  hashingFunction(str, size) {
    let total = 0;
    for (let i = 0; i < str.length; i++) {
      total += str.charCodeAt(i);
    }
    return total % size;
  }
  add(str) {
    const index = this.hashingFunction(str, this.size);
  }
}

const HT = new HashTable(20);

console.log(HT);

function Node(val) {
  this.value = val;
  this.next = null;
  this.back = null;
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.numberOfNodes = 0;
  }
  add(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.back = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.numberOfNodes += 1;
  }
  remove(val, node = this.head) {
    if (node.value === val) {
      if (node === this.head && node === this.tail) {
        this.head = null;
        this.tail = null;
      } else if (node === this.head) {
        this.head = this.head.next;
        this.head.back = null;
      } else if (node === this.tail) {
        this.tail = this.tail.back;
        this.tail.next = null;
      } else {
        node.next.back = node.back;
        node.back.next = node.next;
      }
      this.numberOfNodes -= 1;
    } else if (node.next) {
      this.remove(val, node.next);
    }
  }
  insertAfter(val, toNodeData) {
    var current = this.head;
    while (current) {
      if (current.value === toNodeData) {
        var node = new Node(val);
        if (current === this.tail) {
          this.add(data);
        } else {
          node.back = current;
          node.next = current.next;
          current.next.back = node;
          current.next = node;
          this.numberOfNodes += 1;
        }
      }
      current = current.next;
    }
  }
  traverse(cb) {
    let current = this.head;
    while (current) {
      cb(current);
      current = current.next;
    }
  }
  traverseReverse(cb) {
    let current = this.tail;
    while (current) {
      cb(current);
      current = current.back;
    }
  }
  contains(val) {
    let contains = false;
    this.traverse(node => {
      if (node.value === val) contains = true;
    });
    return contains;
  }
}
const LL = new LinkedList();
console.log(LL);
LL.add(1);
LL.add(2);
LL.add(3);
LL.remove(3);
LL.add(4);
const cb = function({ value }) {
  console.log(value);
};
LL.insertAfter(3, 2);
LL.traverse(cb);
LL.traverseReverse(cb);
console.log(LL);
