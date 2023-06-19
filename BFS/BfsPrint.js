
const BFSprint = (graph,source)=>{
    const stack = [source]
    while(stack.length > 0){
        const current = stack.shift();
        console.log(current)
        for(let neighbor of graph[current]){
            stack.push(neighbor)
        }
    }
}
module.exports={BFSprint}