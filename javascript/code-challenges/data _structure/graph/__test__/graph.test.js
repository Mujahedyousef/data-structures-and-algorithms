let { Vertex, Graph } = require('../graph');
let myGraph = new Graph();
let vertex1 = new Vertex(1);
let vertex2 = new Vertex(2);

describe('testing the graph class', () => {
  test('test to  add vertices ', () => {
    expect(myGraph.addVertex(vertex1)).toEqual({ 'value': 1 });
  });
  // test('test to  addVertex && addEdge && getNeighbors ', () => {
  //   myGraph.addVertex(vertex2);
  //   myGraph.addEdge(vertex1, vertex2);
  //   expect(myGraph.getNeighbors(vertex1)).toEqual([{ 'value': 2 }]);
  // });
  test('test to the getAll method', () => {
    expect(myGraph.getAll()[0]).toEqual({ 'value': 1 });
  });
  // test('test to the size method', () => {
  //   expect(myGraph.size()).toBe(2);
  // });
  it("graph breadth first ",()=>{

    const myGraph=new Graph();
    let vertexA=new Vertex("a")
    let vertexB=new Vertex("b")
    let vertexC=new Vertex("c")
    let vertexD=new Vertex("d")
    let vertexE=new Vertex("e")
    let vertexF=new Vertex("f")
    let vertexG=new Vertex("g")
    myGraph.addVertex(vertexA);
    myGraph.addVertex(vertexB)
    myGraph.addVertex(vertexC)
    myGraph.addVertex(vertexD)
    myGraph.addVertex(vertexE)
    myGraph.addVertex(vertexF)
    myGraph.addVertex(vertexG)
    myGraph.addEdge(vertexA,vertexC)
    myGraph.addEdge(vertexA,vertexB)
    myGraph.addEdge(vertexA,vertexD)
    myGraph.addEdge(vertexD,vertexE)
    myGraph.addEdge(vertexE,vertexF)
    myGraph.addEdge(vertexB,vertexG)
    expect(myGraph.breadthFirst(vertexA)).toEqual(["a","c","b","d","g","e","f"])
})

describe("Depth-first preOrder traversal on a graph", () => {
  it("Depth First", () => {
    let graph = new Graph();

    let one = new Vertex("A");
    let two = new Vertex("B");
    let three = new Vertex("C");
    let four = new Vertex("D");
    let five = new Vertex("E");
    let six = new Vertex("F");
    let seven = new Vertex("G");
    let eight = new Vertex("H");

    graph.addVertex(one);
    graph.addVertex(two);
    graph.addVertex(three);
    graph.addVertex(four);
    graph.addVertex(five);
    graph.addVertex(six);
    graph.addVertex(seven);
    graph.addVertex(eight);

    graph.addEdge(one, two);
    graph.addEdge(one, four);
    graph.addEdge(two, three);
    graph.addEdge(two, four);
    graph.addEdge(three, seven);
    graph.addEdge(four, five);
    graph.addEdge(four, eight);
    graph.addEdge(four, six);
    graph.addEdge(six, eight);
    expect(graph.depthFirstPreOrderTraversal(one)).toEqual("A,B,C,G,D,E,H,F,");
  });
});
});


