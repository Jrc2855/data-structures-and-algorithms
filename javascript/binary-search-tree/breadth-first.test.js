'use strict';
const { BinaryTree, Node } = require('../trees/index');
const { breadthFirst } = require('../tree-breadth-first');
describe('Breadth First tree', () => {
  let tree = new BinaryTree();
  tree.root = new Node(2);
  tree.root.left = new Node(7);
  tree.root.right = new Node(5);
  tree.root.left.left = new Node(2);
  tree.root.left.right = new Node(6);
  tree.root.right.right = new Node(9);
  tree.root.left.right.left = new Node(5);
  tree.root.left.right.right = new Node(11);
  tree.root.right.right.left = new Node(4);
  it('returns an array values as expected', () => {
    expect(breadthFirst(tree)).toEqual([2,7,5,2,6,9,5,11,4]);
  });
});
