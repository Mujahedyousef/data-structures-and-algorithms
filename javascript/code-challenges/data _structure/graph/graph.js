'use strict';

class Vertex{
  constructor(value){
    this.value = value;
  }
}

class Edge{
  constructor(vertex, weight){
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph{
  constructor(){
    this.list = new Map();
  }

  addVertex(vertex){
    this.list.set(vertex, []); // .set() is a Map method
    return vertex;
  }

  addEdge(startVertex, endVertex, weight=0){
    if(!this.list.has(startVertex) || !this.list.has(endVertex)){
      return null;
    }
    let edge = new Edge(endVertex, weight);
    let start = this.list.get(startVertex); // .get() is a Map method
    start.push(edge);
  }
}