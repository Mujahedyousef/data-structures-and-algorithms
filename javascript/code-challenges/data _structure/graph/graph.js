'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this.list = new Map();
  }

  addVertex(vertex) {
    this.list.set(vertex, []);
    return vertex;
  }

  addEdge(start, end, weight) {
    // check if both nodes exist
    if (!this.list.has(start) || !this.list.has(end)) {
      console.log('one or both vertex is not existed');
      return;
    }

    const adjacencies = this.getNeighbors(start); //array
    adjacencies.push(new Edge(end, weight));


    // bi-directional
    const adjacencies2 = this.getNeighbors(end); //array
    adjacencies2.push(new Edge(start, weight));
  }
  getAll() {
    let graph = [];
    for (const [vertex, edge] of this.list.entries()) {
      graph.push(vertex, edge);
    }
    return graph;
  }

  getNeighbors(vertex) {
    if (!this.list.has(vertex)) {
      console.log('node does not exist');
      return;
    }
    return this.list.get(vertex)
  }

  size() {
    return this.list.size;
  }

  breadthFirst(startNode) {
    let queue = [];
    let visitedNodes = new Set();
    let result = []
    queue.push(startNode);
    visitedNodes.add(startNode);

    result.push(startNode.value)
    while (queue.length) {
      const currentNode = queue.shift();
      const neighbors = this.getNeighbors(currentNode);
      for (let neighbor of neighbors) {
        const neighborNode = neighbor.vertex;
        if (visitedNodes.has(neighborNode)) {
          continue;
        } else {
          visitedNodes.add(neighborNode);
          result.push(neighborNode.value)
        }
        queue.push(neighborNode);
      }
    }
    return result;
  }



  depthFirstPreOrderTraversal(node) {
    const visitedNode = new Set();
    visitedNode.add(node);
    const traverse = (current, visited) => {
      visitedNode.add(current);
      const neighbors = this.getNeighbors(current);
      for (const neighbor of neighbors) {
        if (!visited.has(neighbor.vertex)) {
          traverse(neighbor.vertex, visited);
        }
      }
    }
    traverse(node, visitedNode);
    let result = '';
    for (const iterator of visitedNode) {
      result += iterator.value + ",";
    }
    return result;
  }


}

module.exports = { Vertex, Edge, Graph };