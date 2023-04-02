'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight = 0){
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(value) {
    const vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);
    return vertex;
  }

  addEdge(startVertex, endVertex, weight = 0) {
    const neighbor = this.adjacencyList.get(startVertex);
    neighbor.push(new Edge(endVertex, weight));
  }

  getNeighbors(vertex) {
    return [...this.adjacencyList.get(vertex)];
  }

  getNodes() {
    let iterator = this.adjacencyList.keys();
    return iterator;
  }

  breadthFirst(root, callback) {
    const queue = [root];
    const visited = new Set();
    visited.add(root);
    let current = null;
    while (queue.length) {
      current = queue.pop();
      if (callback) {
        callback(current.value);
      }
      const neighbors = this.getNeighbors(current);
      for (let edge of neighbors) {
        if (!visited.has(edge.vertex)) {
          visited.add(edge.vertex);
          queue.unshift(edge.vertex);
        }
      }
    }
    return visited;
  }
  depthFirst(root, callback) {
    const stack = [root];
    const visited = new Set();
    visited.add(root);
    let current = null;
    while (stack.length) {
      current = stack.pop();
      if (callback) {
        callback(current.value);
      }
      const neighbors = this.getNeighbors(current);
      for(let edge of neighbors) {
        if (!visited.has(edge.vertex)) {
          visited.add(edge.vertex);
          stack.push(edge.vertex);
        }
      }
    }
    return visited;
  }
  size() {
    return this.adjacencyList.size;
  }
}

const graph = new Graph();
const Z = graph.addNode('Z');
const Y = graph.addNode('Y');
const X = graph.addNode('X');
const W = graph.addNode('W');
const V = graph.addNode('V');
const U = graph.addNode('U');
const T = graph.addNode('T');
const S = graph.addNode('S');

graph.addEdge(Z, Y);
graph.addEdge(Z, W);
graph.addEdge(Z, X);
graph.addEdge(Y, T);
graph.addEdge(W, U);
graph.addEdge(W, S);
graph.addEdge(X, S);
graph.addEdge(U, S);
graph.addEdge(U, V);

graph.breadthFirst(Z, console.log);
console.log('\\-----SPACER-----//');
graph.depthFirst(Z, console.log);

