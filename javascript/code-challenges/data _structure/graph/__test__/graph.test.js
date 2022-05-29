let { Vertex,  Graph } = require('../graph');
let myGraph = new Graph();
let vertex1 = new Vertex(1);
let vertex2 = new Vertex(2);

describe('testing the graph class', () => {
  test('test to  add vertices ', () => {
    expect(myGraph.addVertex(vertex1)).toEqual({'value' : 1});
  });
  test('test to  addVertex && addEdge && getNeighbors ', () => {
    myGraph.addVertex(vertex2);
    myGraph.addEdge(vertex1, vertex2);
    expect(myGraph.getNeighbors(vertex1)).toEqual([{'value' : 2}]);
  });
  test('test to the getAll method', () => {
    expect(myGraph.getAll()[0]).toEqual({'value' : 1});
  });
  test('test to the size method', () => {
    expect(myGraph.size()).toBe(2);
  });
});