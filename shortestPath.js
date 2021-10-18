/**djistra algorithm */
const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  let visited = new Set([nodeA]);
  const queue = [[nodeA, 0]];
  while (queue.length > 0) {
    const [node, distance] = queue.shift();
    if (node === nodeB) return distance;
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, distance + 1]);
      }
    }
  }

  return -1;
};

const shortestPathDistance = (distances, cityA, cityB ) => {
  const queue = [[cityA, 0 ]];
  let visited = new Set([cityA]);
  while (queue.length > 0 ) {
    const [node, distance ] = queue.shift();
    if ( node === cityB ) return distance
    for (let neighbor of distances[node]){
      if (! visited.has(neighbor.city)){
        visited.add(neighbor.city);
        queue.push([neighbor.city, distance + neighbor.distance])
      }
    }
  }

}





const buildGraph = (edges) => {
  let graph = {};
  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

const edges = [
  ["w", "x"],
  ["x", "y"],
  ["z", "y"],
  ["z", "v"],
  ["w", "v"],
  ["v", "t"],
];

const distances = {
  Abj: [
    { city: "Uyo", distance: 200 },
    { city: "Lagos", distance: 1200 },
    { city: "Bayelsa", distance: 1300 },

  ],
  Uyo: [
    { city: "Abj", distance: 200 },
    { city: "Togo", distance: 1200 },
    { city: "Bayelsa", distance: 700 },
  ],
  Lagos: [
    { city: "Abj", distance: 1200 },
    { city: "Lome", distance: 1200 },
    { city: "Bayelsa", distance: 500 },
  ],
  Lome: [],
  Bayelsa: [],
  Togo: []
};

console.log(shortestPathDistance(distances, "Abj", "Bayelsa"));
