// src [1,2]
// dst [5,7]
const Maze = (m,n,mazeArr,src,dst) =>{
    console.log("im runing")
/* [
    [0,0,1,1,1,0,0,0]
    [1,0,0,0,1,0,0,1]
    [0,1,1,0,1,1,0,0]
]*/
    var startLocationX = src[0];
    var startLocationY = src[1];
    var EndLocationX = dst[0];
    var EndLocationY = dst[1];

    if(startLocationX == EndLocationX && startLocationY == EndLocationY) return true;
    
    const direction =[[1,0],[-1,0],[0,1],[0,-1]]
    var stack = [src]
    var visited = new Set()

    while(stack.length > 0){
        var [x,y] = stack.pop()
        if(x == EndLocationX && y == EndLocationY) return true; 

        for(let dir of direction){
            var newX = x, newY = y;
            if(x+dir[0] >= 0 &&  x+dir[0] < m &&
                y+dir[1] >= 0 &&  y+dir[1] < n &&
                mazeArr[x+dir[0]][y+dir[1]] == 0){
                    newX+=dir[0]
                    newY+=dir[1]
            }
            if(mazeArr[newX,newY] == 1) continue;
            if(visited.has(`${newX},${newY}`)) continue;  
            else{
                stack.push([newX,newY])
                visited.add(`${newX},${newY}`)
            }
        }
    }   
    return false;
}

// const DFSprint = (graph,source)=>{
//     const stack = [source]
//     while(stack.length > 0){
//         const current = stack.pop();
//         console.log(current)
//         for(let neighbor of graph[current]){
//             stack.push(neighbor)
//         }
//     }
// }

module.exports = {Maze}