
var express = require('express')
const app = express()
const port = 4000
var cors = require('cors');
const ex1971 = require('./easy/ex1971')
const ex876 = require('./easy/ex876')
const ex94 = require('./easy/ex94')
const ex1672 = require('./easy/ex1672')
const ex242 = require('./easy/ex242')
const ex2124 = require('./easy/ex2124')
const ex112 = require('./easy/ex112')
const ex1791 = require('./easy/ex1791')

const ex15 = require('./medium/ex15')
const ex371 = require('./medium/ex371')
const ex455 = require('./medium/ex455')
const ex322 = require('./medium/ex322')
const ex1926 = require('./medium/ex1926')
const ex5 = require('./medium/ex5')
const ex1578 = require('./medium/ex1578')
const ex12 =require('./HashMap/ex12_IntegerToRoman')
const ex279 = require('./medium/ex279') 

const DFSprint = require('./DFS/DfsPrint')
const BFSprint = require('./BFS/BfsPrint')

const ex1Codility = require('./coodility/BinaryGap')
const ex2Codility = require('./coodility/CyclicRotation')
const currying = require('./js-functions/currying')
const closures = require('./js-functions/scope_letVar')
const dotenv = require('dotenv');
const { Maze } = require('./DFS/Maze');
const ex200 = require('./SCC/ex200')
dotenv.config()

// middleware
app.use(express.json()) // access to request.body
app.use(express.urlencoded({extended: true}));
app.use(cors())

// /*ex 876 */
// function ListNode(val, next) {
//   this.val = (val===undefined ? 0 : val)
//   this.next = (next===undefined ? null : next)
// }
// let middle = ex876.middleNode(new ListNode(1,new ListNode(4,new ListNode(8,new ListNode(11,new ListNode(12,null))))))
// console.log(middle)


// /* ex 1971 */
// let x = ex1971.areOccurrencesEqual("aabbccdeurkb")
// console.log(x);
// x = ex1971.areOccurrencesEqual("abcdefabcdef")
// console.log(x);


// /* ex 94 */

//  /* Definition for a binary tree node.*/
//  function TreeNode(val, left, right) {
//   this.val = (val===undefined ? 0 : val)
//   this.left = (left===undefined ? null : left)
//   this.right = (right===undefined ? null : right)
// }
// //[1] --> [1]
// let inorderTree = ex94.inorderTraversal(new TreeNode(1,null,null))
// //[1,2,3] --> [3,1,2]
// inorderTree = ex94.inorderTraversal(new TreeNode(1,new TreeNode(3,null,null),new TreeNode(2,null,null)))
// //[] -> []
// inorderTree = ex94.inorderTraversal(new TreeNode(null,new TreeNode(3,null,null),new TreeNode(2,null,null)))
// //[1,null,2,4] => [1,4,2]
// inorderTree = ex94.inorderTraversal(new TreeNode(1,null,new TreeNode(2,new TreeNode(4,null,null),null)))

// console.log(inorderTree);

// /* ex1971 */
// let maxNum = ex1672.maximumWealth([[1,2,6],[2,3,5]])
// console.log(maxNum)

// /* ex 371 */
// var sumOf2 = ex371.getSum(5,8)
// console.log(sumOf2)

// /* ex399 */
// let g =[1,2]
// let s=[1,1,5]
// let happychild =ex455.findContentChildren(g,s)
// console.log(happychild);

// let min =ex322.coinChange([1,2,5],11)
// console.log("min"+min)

// //currrying
// let sumTwo =currying.add(3)(2)
// console.log(sumTwo);


// /*Question 5 */
// var variable = 10;
// (()=>{
//    variable_3 = 35;
//    console.log(variable_3); //35
//    var variable_3 = 45;
//    variable_2 = 15;
//    console.log(variable);   // 10
// })();

// console.log(variable_2); // 15
// //  console.log(variable_3); //undefined
// var variable=30;

// const func = ()=>{
//   var variable_4 = 35;
// }
// // console.log(variable_4); //undefinied

// console.log(x);

// // // ex15
// // let nums = [1,4,5,7,3,-3,4,-1,-3,0]
// // ex15.threeSum(nums)

// let nearest = ex1926.nearestExit([["+",".","+","+","+","+","+"],
//                                   ["+",".","+",".",".",".","+"],
//                                   ["+",".","+",".","+",".","+"],
//                                   ["+",".",".",".","+",".","+"],
//                                   ["+","+","+","+","+",".","+"]],[0,1])
// console.log(nearest)


// let longestSubPolindrom = ex5.longestPalindrome("AABBCCBA")
// console.log(longestSubPolindrom)


let Roman = ex12.intToRoman(9826)
console.log(Roman);
let isAnagram = ex242.isAnagram("cab","acb")
console.log(isAnagram)

// let aBeforeB = ex2124.checkString("aababbbb")
// console.log(aBeforeB)

// let MinimumBalons = ex1578.minCost("aaaaaaaaaaaaaa",[1,3,6,5,4,5,4,4,2,8,3,10,6,6])
// console.log(MinimumBalons)

// let hasPath = ex112.hasPath([5,4,8,11,null,13,4,7,2,null,null,5,1])
// console.log(hasPath)

var length = ex1Codility.LongestSequenceOfZero(561892)
console.log(length)

ex2Codility.CyclicRotation([1,2,3,4,5,8],3)

// const numSquares = ex279.numSquares(18)
// console.log(numSquares)


const graph = {
  a:['b','c'],
  b:['d'],
  c:['e'],
  d:['f'],
  e:[],
  f:[]
}
// DFSprint.DFSprint(graph,'a')
// console.log("recursive")
// DFSprint.DFSprintRecursion(graph,'a')

// console.log("BFS")
// BFSprint.BFSprint(graph,'a')

var n = 4;
var edges = [[0, 1], [1, 2], [2, 3]];
var source = 0;
var destination = 3;

// var result = ex1791.validPath(n,edges,source,destination)
//   console.log(result)

var foundWay = Maze(4,4,[[0,0,1,0],[0,0,0,1],[0,1,1,1],[0,0,1,0]],[1,0],[3,1])
console.log("found way"+foundWay)


ex200.scc()
app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})