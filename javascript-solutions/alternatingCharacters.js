function alternatingCharacters(s) {
    // Check if there is only 0 or 1 character in the string s
    if (s.length <= 1) {
        return 0;
    }
    // If string s only contains "A" or "B", return string length - 1
    if (s.includes("A") === false || s.includes("B") === false) {
        return s.length - 1;
    }
    // Create a new string that will hold all the nonduplicate characters
    let myString = "";
    let stringLength = s.length;
    // Add the first character to the new string
    myString += s[0];
    // Loop through the rest of the characters in string s
    for (let i=1; i<stringLength; i++) {
        // Only add characters if they are not the same as the previously added character
        if (myString[myString.length-1] !== s[i]) {
            myString += s[i];
        }
    }
    // Returns the difference in length between the orginal string and the string with no duplicates
    // Which returns how many characters had to be removed
    return s.length - myString.length;

}
