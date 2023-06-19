
const DFSprint = (graph,source)=>{
    const stack = [source]
    while(stack.length > 0){
        const current = stack.pop();
        console.log(current)
        for(let neighbor of graph[current]){
            stack.push(neighbor)
        }
    }
}

// Recursion

const DFSprintRecursion = (graph,source)=>{
    console.log(source)
    for(let neighbor of graph[source]){
        DFSprint(graph,neighbor)
    }
}
module.exports={DFSprint,DFSprintRecursion}