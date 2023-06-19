/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
// n = 6, edges = [[0,1],[0,2],[3,5],[5,4],[4,3]], source = 0, destination = 5
//Output: false

var validPath = function (n,edges, source, destination) {
    const graph = buildGraph(edges)
    return hasPath(graph,source,destination,new Set())
};
const hasPath = (graph,src,dst,visited) =>{
    if (src === dst) return true;
    if(visited.has(src)) return false; // avoid cycles
    visited.add(src)
    for(let neighbor of graph[src]){
        if(hasPath(graph,neighbor,dst,visited)) return true;
    }
    return false;

}
const buildGraph = (edges)=>{
    const graph = {}
    for(let edge of edges){
        const [u,v]=edge
        if(!(u in graph)) graph[u] = []
        if(!(v in graph)) graph[v] = []
        graph[u].push(v)
        graph[v].push(u)

    } 
    return graph
}
  
module.exports = {validPath}
