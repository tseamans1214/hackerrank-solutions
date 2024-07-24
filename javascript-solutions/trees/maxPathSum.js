/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
let maxPathSumVar;
function maxPathSumHelper(node) {
    if (node === null) return 0;

    // Compute the maximum path sum starting from the left and right child
    let left = Math.max(maxPathSumHelper(node.left), 0);
    let right = Math.max(maxPathSumHelper(node.right), 0);

    // Path sum that passes through the current node
    let currentPathSum = node.val + left + right;

    // Update the global maximum path sum
    maxPathSumVar = Math.max(maxPathSumVar, currentPathSum);

    // Return the maximum path sum extending to the parent node
    return node.val + Math.max(left, right);
};

function maxPathSum(root) {
    maxPathSumVar = -Infinity; // Initialize global variable
    maxPathSumHelper(root);
    return maxPathSumVar;
}
