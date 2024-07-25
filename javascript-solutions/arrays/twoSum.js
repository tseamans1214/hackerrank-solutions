/**
Finds 2 nums in the given nums array that their sum is the target
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const numMap = new Map(); // Initialize a hash map

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numMap.has(complement)) {
            // If the complement exists in the map, return the indices
            return [numMap.get(complement), i];
        }

        // Add the current number and its index to the map
        numMap.set(nums[i], i);
    }

    // If no solution is found, return an empty array (though the problem guarantees a solution)
    return [];
};
