'use strict';

class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

function breadthFirst(tree) {
  let results = [];
  let q = []; q.push(tree.root);
  results.push(tree.root.value); while (q.length !== 0) {
    let tempNode = q.shift();

    if (tempNode.left !== null) {
      q.push(tempNode.left);
      results.push(tempNode.left.value);

    } if (tempNode.right !== null) {
      q.push(tempNode.right);
      results.push(tempNode.right.value);
    }
  }return results;
}
breadthFirst();

var root = new Node(2);
root.left = new Node(7);
root.right = new Node(5);
root.left.left = new Node(2);
root.left.right = new Node(6);
root.right.right = new Node(9);
root.left.right.left = new Node(5);
root.left.right.right = new Node(11);
root.right.right.left = new Node(4);
