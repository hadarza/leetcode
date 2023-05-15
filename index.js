
var express = require('express')
const app = express()
const port = 4000
var cors = require('cors');
const dotenv = require('dotenv')
dotenv.config()

// middleware
app.use(express.json()) // access to request.body
app.use(express.urlencoded({extended: true}));
app.use(cors())

/*Question 1672 - matrix */
/**
 * @param {number[][]} accounts
 * @return {number}
 */
// var maximumWealth = function(accounts) {
//     var max = 0;
//     var sum =0
//     for(var i=0;i<accounts.length;i++){
//         sum =0;
//         for(var j=0;j<accounts[i].length ;j++)
//             sum+=accounts[i][j];
//         if(sum>max) max=sum;
//     }
//     return max;
// }
// let maxNum = maximumWealth([[1,2,6],[2,3,5]])
// console.log(maxNum)


/*Question 94 - binary tree inorder*/


 /* Definition for a binary tree node.*/
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
 
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    if(root == null) return []
    if(root.val ==null ) return [];
    let m = inorderTraversal(root.left)
    let n= inorderTraversal(root.right)
    return [...m,root.val,...n]
};

//[1] --> [1]
let inorderTree =inorderTraversal(new TreeNode(1,null,null))
//[1,2,3] --> [3,1,2]
inorderTree = inorderTraversal(new TreeNode(1,new TreeNode(3,null,null),new TreeNode(2,null,null)))
//[] -> []
inorderTree =inorderTraversal(new TreeNode(null,new TreeNode(3,null,null),new TreeNode(2,null,null)))
//[1,null,2,4] => [1,4,2]
inorderTree = inorderTraversal(new TreeNode(1,null,new TreeNode(2,new TreeNode(4,null,null),null)))

console.log(inorderTree);

/*Question 371 */
var getSum = function(a, b) {
    var multiply2 = Math.pow(2,a)*Math.pow(2,b); //means 2^(a+b)
    return Math.log2(multiply2)
};
var sumOf2 = getSum(5,8)
console.log(sumOf2)
app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})