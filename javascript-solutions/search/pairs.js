function pairs(k, arr) {
    let numPairs = 0;
    let mapA = new Map();
    // k = target = a - b
    // a = number 1 for pair
    // b = number 2 for pair
    // k = a - b
    // a = k + b
    // Loop through the array and find all posible "a" solutions
    for (let i=0; i<arr.length; i++) {
        
        // Create new key value for posible a solution
        mapA.set(k+arr[i], k+arr[i]);
    }
    for (let i=0; i<arr.length; i++) {
        // If the current number is equal to one of the solutions for A, there is a pair
        if (mapA.has(arr[i])) {
            numPairs++;
        }
    }
    return numPairs;
}
