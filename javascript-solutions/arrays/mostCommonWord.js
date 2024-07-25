// Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. 
// It is guaranteed there is at least one word that is not banned, and that the answer is unique.

// The words in paragraph are case-insensitive and the answer should be returned in lowercase.

// Example 1:
// Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
// Output: "ball"
// Explanation: 
// "hit" occurs 3 times, but it is a banned word.
// "ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
// Note that words in the paragraph are not case sensitive,
// that punctuation is ignored (even if adjacent to words, such as "ball,"), 
// and that "hit" isn't the answer even though it occurs more because it is banned.

// Example 2:
// Input: paragraph = "a.", banned = []
// Output: "a"
 

// Constraints:
// 1 <= paragraph.length <= 1000
// paragraph consists of English letters, space ' ', or one of the symbols: "!?',;.".
// 0 <= banned.length <= 100
// 1 <= banned[i].length <= 10
// banned[i] consists of only lowercase English letters.

function mostCommonWord(paragraph, banned) {
    // Step 1: Normalize the input
    paragraph = paragraph.toLowerCase();
    
    // Step 2: Remove punctuation by replacing with space
    paragraph = paragraph.replace(/[!?',;.\"]/g, " ");
    
    // Step 3: Split the paragraph into words
    let words = paragraph.split(/\s+/);
    
    // Step 4: Count word frequencies, ignoring banned words
    let wordCount = new Map();
    let bannedSet = new Set(banned);
    
    for (let word of words) {
        if (word.length > 0 && !bannedSet.has(word)) {
            wordCount.set(word, (wordCount.get(word) || 0) + 1);
        }
    }
    
    // Step 5: Find the most frequent non-banned word
    let maxCount = 0;
    let mostCommon = '';
    
    for (let [word, count] of wordCount) {
        if (count > maxCount) {
            maxCount = count;
            mostCommon = word;
        }
    }
    
    return mostCommon;
}
