function makeAnagram(a, b) {
    let numDeletions = 0;
    // Loop through the strings
    for (let i=0; i < a.length && i < b.length && a.length > 0 && b.length > 0; i++) {
        // Check if first char exists in another both strings
        if (b.includes(a[i])) {
            // remove character from both strings
            b = b.replace(a[i], "");
            a = a.replace(a[i],"");
            i--;
            //console.log("a: " + a);
            //console.log("b: " + b);
        } else {
            // remove character from string a
            // increment numDeletions
            a = a.replace(a[i], "");
            i--;
            numDeletions++;
            //console.log("a: " + a);
        }
    }
    // Delete anything left over
    console.log("a length: " + a.length);
    console.log("b length: " + b.length)
    numDeletions += a.length;
    numDeletions += b.length;
    
    // Return number of deletions
    return numDeletions;

}
