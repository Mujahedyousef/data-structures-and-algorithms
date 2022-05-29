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
    this.list.set(vertex, []);
    return vertex;
  }

  addEdge(startVertex, endVertex, weight=0){
    if(!this.list.has(startVertex) || !this.list.has(endVertex)){
      return null;
    }
    let edge = new Edge(endVertex, weight);
    let start = this.list.get(startVertex); 
    start.push(edge);
  }

  getAll(){
    let graph = [];
    for(const [vertex, edge] of this.list.entries()){
      graph.push(vertex, edge);
    }
    return graph;
  }

  getNeighbors(vertex){
    let result = [];
    if(!this.list.has(vertex)){
      return null;
    }
    let vertexFromList = this.list.get(vertex);
    for(let i=0; i<vertexFromList.length; i++){
      result.push(vertexFromList[i].vertex);
    }
    return result;
  }

  size(){
    return this.list.size; 
  }
}

module.exports = { Vertex, Edge, Graph };