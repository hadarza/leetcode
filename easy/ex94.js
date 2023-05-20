/*Question 94 - binary tree inorder*/

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const inorderTraversal = function(root) {
    if(root == null) return []
    if(root.val ==null ) return [];
    let m = inorderTraversal(root.left)
    let n= inorderTraversal(root.right)
    return [...m,root.val,...n]
};


module.exports = {inorderTraversal}