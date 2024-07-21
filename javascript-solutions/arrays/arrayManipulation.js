function arrayManipulation(n, queries) {
    // Create array of n length filled with 0's
    let finalArray = new Array(n).fill(0);
    let maxValue = 0;
    
    let rows = queries.length;
    for (let i=0; i<rows; i++) {
        let start = queries[i][0]-1;
        let end = queries[i][1]-1;
        let numToAdd = queries[i][2];
        
        for (let j=start; j<=end; j++) {
            finalArray[j] += numToAdd;
            if (maxValue < finalArray[j]) {
                maxValue = finalArray[j];
            }
        }
    }
    return maxValue;

}
