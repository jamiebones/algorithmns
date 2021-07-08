class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ weight, node: vertex2 });
    this.adjacencyList[vertex2].push({ weight, node: vertex1 });
  }
  shortestPath(starting, ending) {
    let distances = {};
    let nodes = new PriorityQueue();
    let previous = {};
    //path to return
    let path = [];
    let smallest;
    for (let vertex in this.adjacencyList) {
      if (vertex === starting) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    //loop as long as we have items in the priority

    while (nodes.values.length > 0) {
        debugger
      smallest = nodes.dequeue().val;
      if (smallest === ending) {
        //we build up the path
        while (previous[smallest]){
            path.push(smallest);
            smallest = previous[smallest]
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          let nextNode = this.adjacencyList[smallest][neighbor];
          let candidate = distances[smallest] + nextNode.weight;

          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
              distances[nextNeighbor] = candidate;
              previous[nextNeighbor] = smallest;
              nodes.enqueue(nextNeighbor, candidate)
          }
        }
       
      }
    }

    return path.concat(smallest).reverse();
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

let graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);

graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);
const path = graph.shortestPath("A", "E");
console.log(path);
