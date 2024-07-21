// Returns YES or NO if s is a valid string
// s is a valid string if:
// 1. all letters only occur one time
// 2. or if only one letter needs to be removed to have the same amount of each letter
// Uses a frequency dictionary for the characters 
// Then creates a frequency dictionary for the frequencies
// Then compares the frequency of each frequency
function isValid(s) {
    // Step 1: Count the frequency of each character
    const charFreq = {};
    for (let char of s) {
        charFreq[char] = (charFreq[char] || 0) + 1;
    }

    // Step 2: Count the frequencies of these frequencies
    const freqCount = {};
    for (let key in charFreq) {
        let freq = charFreq[key];
        freqCount[freq] = (freqCount[freq] || 0) + 1;
    }

    // Step 3: Determine if the string is valid
    const freqValues = Object.keys(freqCount).map(Number);
    if (freqValues.length === 1) {
        // Only one frequency, so the string is valid
        return "YES";
    } else if (freqValues.length === 2) {
        const [f1, f2] = freqValues;
        const count1 = freqCount[f1];
        const count2 = freqCount[f2];

        // Check if one frequency is 1 and occurs exactly once
        if ((count1 === 1 && (f1 === 1 || f1 - f2 === 1)) ||
            (count2 === 1 && (f2 === 1 || f2 - f1 === 1))) {
            return "YES";
        }
    }

    // If none of the above conditions are met, the string is not valid
    return "NO";
}
