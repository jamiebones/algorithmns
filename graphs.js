const depthFirstSearch = (graph, source) => {
  let stack = [source];
  let visited = {};

  while (stack.length > 0) {
    let currentItem = stack.pop();
    if (!visited[currentItem]) {
      visited[currentItem] = currentItem;
      let currentArray = graph[currentItem];
      for (let i = 0; i < currentArray.length; i++) {
        const item = currentArray[i];
        stack.push(item);
      }
    }
  }
  return visited;
};

const graphs = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};

//console.log(depthFirstSearch(graphs, "a"));

const undirectedGraph = (edges, nodeA, nodeB) => {
  //convert edges to adjancency List {}
  let graph = {};
  for (let i = 0; i < edges.length; i++) {
    const currentArray = edges[i];
    for (let key of currentArray) {
      if (!graph[key]) {
        //filter current array
        let a = currentArray.filter((ele) => ele !== key);
        graph[key] = a;
      } else {
        let a = currentArray.filter((ele) => ele !== key);
        graph[key].push(...a);
      }
    }
  }

  const recursiveDepthFirstSearch = (graph, src, dst, visited = {}) => {
    if (src === dst) return true;
    let current = graph[src];

    for (let neighbor of current) {
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        if (recursiveDepthFirstSearch(graph, neighbor, dst, visited) === true) {
          return true;
        }
      }
    }
    return false;
  };

  return recursiveDepthFirstSearch(graph, nodeA, nodeB);
};

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];
console.log(undirectedGraph(edges, "j", "m"));
