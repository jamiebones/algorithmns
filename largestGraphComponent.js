
const largestGraphComponent = (graphs) => {
    let visited = new Set();
    let largest = 0;
   for ( let node in graphs ){
       let size = exploreGraph(graphs, node, visited);
       if ( size > largest ) largest = size
   }
   return largest;
}

const exploreGraph = (graph, node, visited ) => {
    if (visited.has(String(node))) return 0;
    visited.add(String(node))
    let size = 1;
    for ( let neighbor of graph[node] ){
        size += exploreGraph(graph, neighbor, visited)
    }
    return size;
}


const graphs = {
    0: [2],
    1: [],
    2: [],
    3: [5,2],
    4: [1],
    5: [2]
}

console.log(largestGraphComponent(graphs))