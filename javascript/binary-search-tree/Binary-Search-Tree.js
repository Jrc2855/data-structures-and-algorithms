'use strict';

// Attribution: https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}

// functions to be implemented
// insert(data)
// remove(data)

// Helper Functions
// findMinNode()
// getRootNode()
// inOrder(node)
// preorder(node)              
// postorder(node)
// search(node, data)


// insert - Creates a new node with a value data, if the tree is empty it adds this node to a tree and makes it a root, otherwise it calls insert(node, data).
function insert(data) {
  var newNode = new Node(data);
  if (this.root === null) {
    this.root = newNode;
  } else
    this.insertNode(this.root, newNode);
}

// insertNode - Compares the given data with the data of the current node and moves left or right accordingly and recurs until it finds a correct node with a null value where the new node can be added.
function insertNode(node, newNode) {
  if (newNode.data < node.data) {
    if (node.left === null)
      node.left = newNode;
    else
      this.insertNode(node.left, newNode);
  }
  else {
    if (node.right === null)
      node.right = newNode;
    else
      this.insertNode(node.right, newNode);
  }
}

// remove - Removes a node with a given data
function remove(data) {
  this.root = this.removeNode(this.root, data);
}
// removeNode - Searches for a node with a given data and then performs certain steps to delete it. 
function removeNode(node, key) {
  if (node === null)
    return null;
  else if (key < node.data) {
    node.left = this.removeNode(node.left, key);
    return node;
  } else if (key > node.data) {
    node.right = this.removeNode(node.right, key);
    return node;
  } else {
    if (node.left === null && node.right === null) {
      node = null;
      return node;
    } if (node.left === null) {
      node = node.right;
      return node;
    } else if (node.right === null) {
      node = node.left;
      return node;
    }
    var aux = this.findMinNode(node.right);
    node.data = aux.data;

    node.right = this.removeNode(node.right, aux.data);
    return node;
  }
}


//-----Tree Traversal-----//

function inOrder(node) {
  if (node !== null) {
    this.inOrder(node.left);
    console.log(node.data);
    this.inOrder(node.right);
  }
}

function preOrder(node) {
  if (node !== null) {
    console.log(node.data);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }
}

function postOrder(node) {
  if (node !== null) {
    this.postOrder(node.left);
    this.postOrder(node.right);
    console.log(node.data);
  }
}


//-----Helper Methods-----//

// findMinNode - Searches for a node with a minimum value starting from node.
function findMinNode(node) {
  if (node.left === null)
    return node;
  else
    return this.findMinNode(node.left);
}

// getRootNode - Returns the root node of a tree
function getRootNode() {
  return this.root;
}

// search - Searches the node with a value data in the entire tree
function search(node, data) {
  if (node === null)
    return null;
  else if (data < node.data)
    return this.search(node.left, data);
  else if (data > node.data)
    return this.search(node.right, data);
  else
    return node;
}

var BST = new BinarySearchTree();

BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

var root = BST.getRootNode();

BST.inOrder(root);

BST.remove(5);

BST.inOrder(root);


console.log(BST.inOrder(root));

