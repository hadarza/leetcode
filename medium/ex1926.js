
/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */

// using BFS to find the shortest way from entrance
// O(v+E)
// act like a Queue
var nearestExit = function(maze, entrance) {
    let m = maze.length , n = maze[0].length
    if(m == 0 && n == 0) return -1;
    let queue = new Array()

    queue.push([entrance,0]) // enter to queue the node we start with
    maze[entrance[0]][entrance[1]] = '+' // make sure we don't visit there again

     while(queue.length != 0){
         let [pos,steps] = queue.shift() // remove from queue
         steps++;

         let dirs = [[1,0],[-1,0],[0,1],[0,-1]]
         // go to all neighbors

         for(let direction of dirs){ // for of.. - iterate over numbers vs for in .. iterate over strings
             let x = pos[0]+direction[0];
             let y = pos[1]+direction[1];         

             if(x < 0 || x >= m || y < 0 || y >= n || maze[x][y] === '+') continue; // dont enter
             if(x == 0 || x == m-1 || y==0 || y== n-1) return steps;
            queue.push([[x,y],steps])    
            maze[x][y] = '+'
        }

     }
    return -1;

};

module.exports={nearestExit}