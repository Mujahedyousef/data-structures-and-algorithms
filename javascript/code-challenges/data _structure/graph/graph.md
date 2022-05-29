# Graphs

* Is a non-linear data structure consisting of a finite set of vertices (nodes) and a set of edges that connect a pair of nodes.

### Terminology

1. Vertex - a node data object that can have zero or more adjacent vertices.
1. Edge - a connection between two vertices.
1. Neighbor - the vertex's adjacent vertices (connected to it by edges).
1. Degree - the number of edges connected to that vertex.

## Challenge

> Create some Method :

1. add node( )
1. add edge( )
1. get nodes( )
1. get neighbors( )
1. size( )

## Approach & Efficiency

> Create three classes

1. The Vertex(value) class -> to define a vertex.
1. The Edge(vertex, weight) class -> to define an edge and weight for a vertex.
1. The Graph() class -> to define a map as a graph.

> addVertex(vertex)

* Adds a vertex to the graph -> Arguments: value, Returns: The added vertex.

> addEdge(startVertex, endVertex, weight=0)

* Adds a new edge between two vertices in the graph, Arguments: 2 nodes to be connected by the edge, weight (optional), Returns: nothing.

> getAll( )

* Returns all of the nodes in the graph as an array.

> getNeighbors(vertex)

* Returns an array of edges connected to the given vertex.

> size( )

* Returns the total number of vertices in the graph.

## test

![test](./test.PNG)

|name|link|
|----|----|
|PR|[PR]()|