function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

class AVL {
  constructor(val) {
    this.root = new Node(val);
    this.disparity = 0;
  }
  add(val, node = this.root, disparity = 0) {
    if (this.disparity < disparity) this.disparity = disparity;
    if (typeof val !== 'number') return;
    else if (node.val > val) {
      if (!node.left) {
        node.left = new Node(val);
        if (disparity > 1) this.rebalance();
        this.disparity = 0;
      }
      if (!node.right) disparity += 1;
      return this.add(val, node.left, disparity);
    } else if (node.val < val) {
      if (!node.right) {
        node.right = new Node(val);
        if (disparity > 1) this.rebalance();
        this.disparity = 0;
      }
      if (!node.left) disparity += 1;
      return this.add(val, node.right, disparity);
    }
  }
  remove(val, node = this.root) {
    if (typeof val !== 'number' || !node) return;
    else if (node.val > val) {
      if (node.left.val === val) {
        node.left = null;
        return val;
      } else return this.remove(val, node.left);
    } else if (node.val < val) {
      if (node.right.val === val) {
        node.right = null;
        return val;
      } else return this.remove(val, node.right);
    }
  }
  rebalance(root) {
    let self = this;
    const nodeVals = [];
    function LRR(node) {
      if (node.left) LRR(node.left);
      nodeVals.push(node.val);
      if (node.right) LRR(node.right);
    }
    LRR(root || this.root);
    function mergeSortAdd(nodeVals, root = false) {
      if (!nodeVals.length) return;
      const middleIndex = Math.floor(nodeVals.length / 2);
      const middle = nodeVals[middleIndex];
      if (root) {
        self.root = new Node(middle);
      } else self.add(middle);
      if (nodeVals.length) {
        mergeSortAdd(nodeVals.slice(0, middleIndex));
        mergeSortAdd(nodeVals.slice(middleIndex + 1));
      }
    }
    mergeSortAdd(nodeVals, true);
  }
}
const tree = new AVL(1);
tree.add(2);
tree.add(3);
tree.add(4);
tree.add(5);
tree.add(6);
tree.add(7);
tree.add(0.3);
tree.add(0.1);
tree.add(0);

console.log(tree.root.left);
// tree.rebalance();
// console.log(tree.root.right);
console.log(tree.disparity);
