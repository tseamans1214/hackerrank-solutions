function substrCount(n, s) {
    let count = 0;

    // Array to store consecutive character counts
    let sameCharCount = [];

    let i = 0;
    while (i < n) {
        let charCount = 1;
        while (i + 1 < n && s[i] === s[i + 1]) {
            charCount++;
            i++;
        }
        sameCharCount.push({ char: s[i], count: charCount });
        i++;
    }

    // Count substrings where all characters are the same
    for (let { count: charCount } of sameCharCount) {
        count += (charCount * (charCount + 1)) / 2;
    }

    // Count substrings where all characters except the middle one are the same
    for (let j = 1; j < sameCharCount.length - 1; j++) {
        if (sameCharCount[j].count === 1 &&
            sameCharCount[j - 1].char === sameCharCount[j + 1].char) {
            count += Math.min(sameCharCount[j - 1].count, sameCharCount[j + 1].count);
        }
    }

    return count;
}
