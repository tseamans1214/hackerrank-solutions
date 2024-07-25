// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const results = [];

    // Step 1: Sort the array
    nums.sort((a, b) => a - b);

    // Step 2: Iterate through the array
    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicates
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }

        // Step 3: Use two-pointer technique
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                // Found a triplet
                results.push([nums[i], nums[left], nums[right]]);

                // Skip duplicates for left and right pointers
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                // Move pointers inward
                left++;
                right--;
            } else if (sum < 0) {
                // Move the left pointer to the right
                left++;
            } else {
                // Move the right pointer to the left
                right--;
            }
        }
    }

    return results;
};
