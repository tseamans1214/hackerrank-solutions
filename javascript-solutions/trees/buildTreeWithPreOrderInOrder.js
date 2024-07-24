/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// Builds a tree given its preorder and inorder results.
var buildTree = function(preorder, inorder) {
    if (preorder.length === 0 || inorder.length === 0) {
        return null;
    }

    // The first element of preorder is the root
    const rootVal = preorder[0];
    const root = new TreeNode(rootVal);

    // Find the index of the root in inorder array
    const rootIndexInorder = inorder.indexOf(rootVal);

    // Split inorder array into left and right subtrees
    const leftInorder = inorder.slice(0, rootIndexInorder);
    const rightInorder = inorder.slice(rootIndexInorder + 1);

    // Split preorder array into left and right subtrees
    const leftPreorder = preorder.slice(1, leftInorder.length + 1);
    const rightPreorder = preorder.slice(leftInorder.length + 1);

    // Recursively build left and right subtrees
    root.left = buildTree(leftPreorder, leftInorder);
    root.right = buildTree(rightPreorder, rightInorder);

    return root;
};
