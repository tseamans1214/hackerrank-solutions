function minimumSwaps(arr) {
    let numSwaps = 0;
    if (arr.length <= 1) {
        return numSwaps; 
    }
    // Loop through array and swap if they are not in correct place
    let arrLength = arr.length;
    for (let i=0; i<arrLength; i++) {
        // If the number if not in the correct place
        if (arr[i] != i+1) {
            // store swapped position
            let tempSwap = arr[arr[i]-1];
            // Move current number to correct position
            arr[arr[i]-1] = arr[i];
            // Move swapped number to current position
            arr[i] = tempSwap;
            // Move iteration back one so it can check if this new number is in the corret position
            i--;
            // A swap took place so increment by 1
            numSwaps++;
        }
    }
    return numSwaps;
}
