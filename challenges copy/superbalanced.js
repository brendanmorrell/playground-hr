/**
 * Write a function to see if a binary tree "superbalanced".
 * An empty tree is balanced. A non-empty binary tree T is balanced if:
1) Left subtree of T is balanced
2) Right subtree of T is balanced
3) The difference between heights of left subtree and right subtree is not more than 1.
example: http://www.geeksforgeeks.org/wp-content/uploads/balanced_tree.GIF
 */

function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
const BST = new BinaryTree(4);
BST.left = new BinaryTree(2);
BST.left.left = new BinaryTree(1);
BST.left.right = new BinaryTree(3);


function superbalanced(tree) {}

module.exports = { BinaryTree, superbalanced };
