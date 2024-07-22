// Counting sort approach (Sliding window)
function activityNotifications(expenditure, d) {
    if (expenditure.length <= d) {
        return 0;
    }

    let notifications = 0;
    const count = new Array(201).fill(0); // Expenditures range from 0 to 200

    // Helper function to find median using the count array
    function findMedian(count, d) {
        let sum = 0;
        let median = 0;

        if (d % 2 === 0) {
            let mid1 = null, mid2 = null;
            for (let i = 0; i < count.length; i++) {
                sum += count[i];
                if (mid1 === null && sum >= d / 2) {
                    mid1 = i;
                }
                if (mid2 === null && sum >= (d / 2) + 1) {
                    mid2 = i;
                    break;
                }
            }
            median = (mid1 + mid2) / 2;
        } else {
            for (let i = 0; i < count.length; i++) {
                sum += count[i];
                if (sum > d / 2) {
                    median = i;
                    break;
                }
            }
        }

        return median;
    }

    // Initialize the count array with the first 'd' days of expenditure
    for (let i = 0; i < d; i++) {
        count[expenditure[i]]++;
    }

    // Process each day starting from the (d+1)th day
    for (let i = d; i < expenditure.length; i++) {
        const median = findMedian(count, d);
        
        if (expenditure[i] >= 2 * median) {
            notifications++;
        }

        // Update the count array for the sliding window
        count[expenditure[i]]++;
        count[expenditure[i - d]]--;
    }

    return notifications;
}
