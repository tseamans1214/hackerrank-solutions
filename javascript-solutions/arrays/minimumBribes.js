function minimumBribes(q) {
    let bribes = 0;
    
    for (let i = 0; i < q.length; i++) {
        // Check if the person has moved more than 2 positions
        if (q[i] - (i + 1) > 2) {
            console.log("Too chaotic");
            return;
        }

        // Count how many people with higher numbers are in front of q[i]
        for (let j = Math.max(0, q[i] - 2); j < i; j++) {
            if (q[j] > q[i]) {
                bribes++;
            }
        }
    }
    console.log(bribes);
}
