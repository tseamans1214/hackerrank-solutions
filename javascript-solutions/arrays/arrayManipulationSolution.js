function arrayManipulation(n, queries) {
    // Create a difference array of size n + 1
    let diff = new Array(n + 1).fill(0);
    
    // Apply each operation to the difference array
    for (let i = 0; i < queries.length; i++) {
        let a = queries[i][0];
        let b = queries[i][1];
        let k = queries[i][2];
        
        diff[a - 1] += k;  // Convert 1-indexed to 0-indexed
        if (b < n) {
            diff[b] -= k;  // We don't need to do this for the last element
        }
    }
    
    // Compute the maximum value using the prefix sum
    let max = 0;
    let current = 0;
    
    for (let i = 0; i < n; i++) {
        current += diff[i];
        if (current > max) {
            max = current;
        }
    }
    
    return max;
}
