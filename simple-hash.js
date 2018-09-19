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
// const LL = new LinkedList();
// console.log(LL);
// LL.add(1);
// LL.add(2);
// LL.add(3);
// LL.remove(3);
// LL.add(4);
// const cb = function({ value }) {
//   console.log(value);
// };
// LL.insertAfter(3, 2);
// LL.traverse(cb);
// LL.traverseReverse(cb);
// console.log(LL);
class HashTable {
  constructor(size) {
    this.size = size;
    this.hashMap = new Array(size);
    this.openSlots = size;
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
    if (this.hashMap[index]) {
      if (typeof this.hashMap[index] === 'string') {
        const existing = this.hashMap[index];
        this.hashMap[index] = new LinkedList();
        this.hashMap[index].add(existing);
      }
      this.hashMap[index].add(str);
    } else {
      this.openSlots -= 1;
      this.hashMap[index] = str;
      if (!this.openSlots) {
        this.resize();
        console.log('object');
      }
    }
  }
  remove(str) {
    const index = this.hashingFunction(str, this.size);
    if (typeof this.hashMap[index] === 'string') delete this.hashMap[index];
    else {
      this.hashMap[index].remove(str);
    }
  }
  resize() {
    const previous = this.hashMap;
    this.size *= 2;
    this.openSlots = this.size;
    console.log(this.size);
    this.hashMap = new Array(this.size);
    previous.forEach(x => {
      if (typeof x === 'string') {
        this.add(x);
      } else {
        x.traverse(node => this.add(node.value));
      }
    });
  }
}

const HT = new HashTable(10);
HT.add('dog');
HT.add('a');
HT.add('b');
HT.add('c');
HT.add('d');
HT.add('e');
HT.add('f');
HT.add('aa');
HT.add('bb');
HT.add('cc');
HT.add('dd');
HT.add('ee');
HT.add('ff');
HT.add('gg');
HT.add('hh');
HT.add('i');
HT.add('h');
HT.add('g');
HT.add('ii');
HT.add('j');
HT.add('k');
HT.add('l');
HT.add('m');
HT.add('n');
HT.add('o');
HT.add('pp');
HT.add('pd');
HT.add('pq');
HT.add('nnfhjdsa');
HT.remove('pq');
HT.remove('nnfhjds');
console.log(HT);
let count = 0;
HT.hashMap.forEach(x => {
  if (typeof x === 'string') {
    count += 1;
  } else {
    x.traverse(node => (count += 1));
  }
});
console.log(count);
