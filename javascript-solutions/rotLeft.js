function rotLeft(a, d) {
    // If number of rotations equals the length of the array, return the array (no change)
    if (a.length === d) {
        return a;
    }
    let shiftedArray = []
    for (let i=0; i<a.length; i++) {
        // Move d spaces left from current position
        let newPosition = i-d;
        if (newPosition < 0) {
            // if newPosition is less than 0, subract it from the length because it is wrapping around
            newPosition = a.length + newPosition;
        }
        shiftedArray[newPosition] = a[i];
    }
    return shiftedArray;
}
