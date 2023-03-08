'use strict';

class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

function fizzBuzz(tree) {
  let current = tree.root;
  let _traverse = (node) => {
    if (node.value % 15 === 0) {
      node.value = 'FizzBuzz';
    } else if (node.value % 5 === 0) {
      node.value = 'Buzz';
    } else if (node.value % 3 === 0) {
      node.value = 'Fizz';
    } else {
      node.value = node.value.toString();
    }
    if (node.left) _traverse(node.left);
    if (node.right) _traverse(node.right);
  };
  _traverse(current);
  return tree;
}
fizzBuzz();

var root = new Node(15);
root.left = new Node(3);
root.right = new Node(5);
root.left.left = new Node(4);

console.log(root);

