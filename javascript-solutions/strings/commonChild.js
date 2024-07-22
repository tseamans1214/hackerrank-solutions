function commonChild(s1, s2) {
    const n = s1.length; // Length of the strings (both are of equal length)
    
    // Initialize a 2D array (dp) with (n+1) x (n+1) dimensions, filled with 0s
    // dp[i][j] will store the length of the longest common subsequence of s1[0...i-1] and s2[0...j-1]
    const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

    // Iterate over each character of s1 and s2
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            // If characters from s1 and s2 match, 
            // increment the length of the LCS by 1 from the previous indices (i-1, j-1)
            if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1] + 1;
            } else {
                // If characters don't match, 
                // take the maximum value from either dp[i-1][j] or dp[i][j-1]
                // This means we either exclude the character from s1 or s2
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    // The value at dp[n][n] contains the length of the longest common subsequence
    // for the entire strings s1 and s2
    return dp[n][n];
}
