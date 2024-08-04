// Harold is a kidnapper who wrote a ransom note, but now he is worried it will be traced back to him through his handwriting.
// He found a magazine and wants to know if he can cut out whole words from it and use them to create an untraceable replica of his ransom note.
// The words in his note are case-sensitive and he must use only whole words available in the magazine. He cannot use substrings or concatenation to create the words he needs.
// Given the words in the magazine and the words in the ransom note, print Yes if he can replicate his ransom note exactly using whole words from the magazine; otherwise, print No.

function checkMagazine(magazine, note) { 
    // If there less words in the magazine than the note, it cannot create the note
    if (magazine.length < note.length) {
        console.log("No");
    } else {
        let allWords = true;
        let magazineWordMap = new Map();
        // Loop through all the magazine words and put them in a map with the number of occurances
        for (let i=0; i<magazine.length; i++) {
            // If it has a word already, increase the total (value) of that word (key)
            if (magazineWordMap.has(magazine[i])) { 
                let newNum = magazineWordMap.get(magazine[i]) + 1;
                magazineWordMap.set(magazine[i], newNum);
            } else { // Else create a new key value pair with 1 for the total (value)
                magazineWordMap.set(magazine[i], 1);
            }
        }
        
        // Loop through the array of words in the note and check if they are in the magazine map
        for (let i=0; i<note.length; i++) {
            // If the word is not in the map, break the loop and set allWords = false
            if (magazineWordMap.has(note[i]) === false) {
                allWords = false;
                break;
            } else { // Else remove the word from the magazine map
                let newNum = magazineWordMap.get(note[i]) - 1;
                if (newNum > 0) {
                    magazineWordMap.set(note[i], newNum);
                } else {
                    magazineWordMap.delete(note[i]);
                }
            }
        }
        // If all words are in the magazine, print Yes
        if (allWords) {
            console.log("Yes");
        } else { // else print No
            console.log("No");
        }
    }
}
