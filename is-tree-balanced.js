function BST(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
BST.prototype.add = function(...vals) {
  vals.forEach(val => {
    if (val < this.val) return this.left ? this.left.add(val) : (this.left = new BST(val));
    if (val > this.val) return this.right ? this.right.add(val) : (this.right = new BST(val));
  });
};
BST.prototype.exists = function(val) {
  if (this.val === val) return true;
  if (this.val < val && this.right) return this.right.exists(val);
  if (this.val > val && this.left) return this.left.exists(val);
  return false;
};
BST.prototype.remove = function(...vals) {
  vals.forEach(val => {
    this.balance(val);
  });
};
BST.prototype.preOrder = function(cb = console.log) {
  cb(this.val);
  if (this.left) this.left.preOrder();
  if (this.right) this.right.preOrder();
};
BST.prototype.postOrder = function(cb = console.log) {
  if (this.left) this.left.postOrder();
  if (this.right) this.right.postOrder();
  cb(this.val);
};
BST.prototype.inOrder = function(cb = console.log) {
  if (this.left) this.left.inOrder(cb);
  cb(this.val);
  if (this.right) this.right.inOrder(cb);
};
BST.prototype.breadthFirst = function(cb = console.log, queue = [this]) {
  while (queue.length) {
    let elt = queue[0];
    if (elt.left) queue.push(elt.left);
    if (elt.right) queue.push(elt.right);
    cb(queue.shift().val);
  }
};
BST.prototype.getVals = function() {
  const vals = [];
  this.inOrder(val => vals.push(val));
  return vals;
};
// definitely need to clean this up
BST.prototype.balance = function(valToRemove) {
  const getInsertionOrder = (vals = this.getVals(), insertionOrder = []) => {
    const middle = ~~(vals.length / 2);
    insertionOrder.push(vals[middle]);
    const left = vals.slice(0, middle);
    const right = vals.slice(middle + 1);
    if (left.length) insertionOrder.concat(getInsertionOrder(left, insertionOrder));
    if (right.length) insertionOrder.concat(getInsertionOrder(right, insertionOrder));
    return insertionOrder;
  };
  const insertionOrder = getInsertionOrder().filter(x => x !== valToRemove);
  if (insertionOrder.length) {
    this.val = insertionOrder.shift();
    this.left = null;
    this.right = null;
    while (insertionOrder.length) {
      this.add(insertionOrder.shift());
    }
  }
};
BST.prototype.getDepth = function(depth = 0) {
  let leftDepth = this.left ? this.left.getDepth(depth + 1) : depth;
  let rightDepth = this.right ? this.right.getDepth(depth + 1) : depth;
  return Math.max(leftDepth, rightDepth);
};
// haven't tested this original was just
// let leftHeight = this.left ? this.left.getDepth(1) : 0;
// let rightHeight = this.right ? this.right.getDepth(1) : 0;
// return Math.abs(leftHeight - rightHeight) <= 1;
BST.prototype.isBalanced = function(depth = 0, depths = []) {
  const results = [];
  const compareHeight = root => {
    let leftHeight = root.left ? root.left.getDepth(1) : 0;
    let rightHeight = root.right ? root.right.getDepth(1) : 0;
    results.push(Math.abs(leftHeight - rightHeight) <= 1);
  };
  function traverse(node, cb) {
    if (node) {
      cb(node);
      if (node.left) traverse(node.left, cb);
      if (node.right) traverse(node.right, cb);
    }
  }
  traverse(this, compareHeight);
  console.log(results);
  return results.reduce((acc, x) => acc && x);
};
BST.prototype.isSuperBalanced = function() {};

const myBST = new BST(4);
const unbalanced = new BST(1);
unbalanced.add(2, 3, 4, 5, 4.5, 6, 7);
myBST.add(2, 6, 1, 3, 5, 7, 4, 4);
console.log(myBST);
console.log(myBST.isBalanced());
console.log(unbalanced.isBalanced());
unbalanced.balance();
console.log(unbalanced.isBalanced());
console.log(unbalanced);
