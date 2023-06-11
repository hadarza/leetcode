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
var pathSum = function(root, targetSum) {
  var ans=[]
   const Path = function(node, path, sum) {
    
    if (!node) return;
      
    if (isALeaf(node)) {
      if (sum === node.val) {
        ans.push([...path, node.val]);
      }
      return;
    }
    
    Path(node.left, [...path, node.val], sum - node.val);
    Path(node.right, [...path, node.val], sum - node.val);
  };
  
  Path(root, [], targetSum);
  
  return ans;
};
