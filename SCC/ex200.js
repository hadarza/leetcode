
const DFSPath = function(node,graph,visited){
    if(visited.has(node)) return false;

    visited.add(node)

    for(let neighbor of graph[node]){
        DFSPath(neighbor,graph,visited)
    }
    return true;
}
const scc = function(graph) {
    var count = 0
    const visited = new Set()
    for(let node in graph){
        if(DFSPath(node,graph,visited))
            count++;
    }
    return count;
    
};

module.exports = {scc}