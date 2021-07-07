class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    //find vertex1
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    //remove the first one
    let vertexOneArray = this.adjacencyList[vertex1];
    let remainVertex = vertexOneArray.filter((ele) => ele !== vertex2);
    this.adjacencyList[vertex1] = remainVertex;
    //remove the second items
    let vertexTwoArray = this.adjacencyList[vertex2];
    let remainVertexTwo = vertexTwoArray.filter((ele) => ele !== vertex1);
    this.adjacencyList[vertex2] = remainVertexTwo;
  }
  removeVertex(vertex) {
    for (let key in this.adjacencyList) {
      this.removeEdge(key, vertex);
    }
    delete this.adjacencyList[vertex];
  }
  DFSRecursive() {
    let visited = {};
    let visitedArray = [];
    let list = this.adjacencyList;

    function recursiveCall(node) {
      let edges = list[node];
      if (edges.length === 0) {
        return null;
      }
      //we loop over this edge
      visited[node] = true;
      visitedArray.push(node);
      edges.forEach((neighbor) => {
        if (!visited[neighbor]) {
          return recursiveCall(neighbor);
        }
      });
    }

    for (let key in this.adjacencyList) {
      //start from the first key
      recursiveCall(key);
      break;
    }
    return visitedArray;
  }

  DFSIterative(vertex) {
    let stack = [];
    let visited = {};
    let resultArray = [];
    stack.push(vertex);
    visited[vertex] = true;
    while (stack.length !== 0) {
      //check if not visited already
      let vertexNode = stack.pop();
      resultArray.push(vertexNode);
      let neighbors = this.adjacencyList[vertexNode];
      neighbors.forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return resultArray;
  }
  BFSIterative(vertex) {
    let queue = [];
    let visited = {};
    let resultArray = [];
    queue.push(vertex);
    visited[vertex] = true;
    while (queue.length !== 0) {
      //check if not visited already
      let vertexNode = queue.shift();
      resultArray.push(vertexNode);
      let neighbors = this.adjacencyList[vertexNode];
      neighbors.forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return resultArray;
  }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");
const result = g.DFSIterative("A");
const result2 = g.BFSIterative("A");
console.log("DFS", result);
console.log("BFS", result2);
