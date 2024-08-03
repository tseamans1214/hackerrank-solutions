function twoStrings(s1, s2) {
    // Create a set from characters in the first string
    const set1 = new Set(s1);

    // Check if any character in the second string is in the set
    for (let char of s2) {
        if (set1.has(char)) {
            return 'YES';
        }
    }
    
    return 'NO';
}
