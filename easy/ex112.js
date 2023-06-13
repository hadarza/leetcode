
 /* Definition for a binary tree node.*/
  function TreeNode(val, left, right) {
      this.val = (val===undefined ? 0 : val)
      this.left = (left===undefined ? null : left)
      this.right = (right===undefined ? null : right)
  }
var isALeaf= function (node){
    return node.left == null && node.right == null;
}
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
var haspathSum = function(root, targetSum) {
    if(root == null) { return false;}
    if(targetSum === root.val && isALeaf(root)){
        // mean we have a path.
        return true;
    }else if(targetSum !== root.val && isALeaf(root)){
        // no path here
        return false;
    }
    return haspathSum(root.left, targetSum - root.val) || haspathSum(root.right, targetSum - root.val)
    
};
module.exports = {haspathSum}