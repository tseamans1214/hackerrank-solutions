/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    const result = [];

    // Helper function to perform pre-order traversal and build the serialized string
    function serializeHelper(node) {
        if (node === null) {
            result.push("null"); // Use "null" to denote null nodes
            return;
        }
        result.push(node.val); // Append the value of the node
        serializeHelper(node.left); // Recurse on the left child
        serializeHelper(node.right); // Recurse on the right child
    }

    serializeHelper(root);
    return result.join(","); // Join the array into a string with commas as delimiters
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (!data) return null;
        
        const values = data.split(","); // Split the serialized string into an array of values
        let index = 0; // Initialize index to track the position in the values array

        // Helper function to recursively construct the tree
        function deserializeHelper() {
            if (values[index] === "null") {
                index++; // Move to the next value in the array
                return null; // Return null for "null" markers
            }
            const node = new TreeNode(parseInt(values[index])); // Create a new TreeNode with the current value
            index++; // Move to the next value in the array
            node.left = deserializeHelper(); // Recurse to construct the left subtree
            node.right = deserializeHelper(); // Recurse to construct the right subtree
            return node; // Return the constructed node
        }

        return deserializeHelper(); // Start the recursion from the root
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
