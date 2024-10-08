// You are planning production for an order. You have a number of machines that each have a fixed number of days to produce an item. 
// Given that all the machines operate simultaneously, determine the minimum number of days to produce the required order.
// For example, you have to produce  items. You have three machines that take  days to produce an item. The following is a schedule of items produced:
// Day Production  Count
// 2   2               2
// 3   1               3
// 4   2               5
// 6   3               8
// 8   2              10
// It takes  days to produce  items using these machines.

// Function Description
// Complete the minimumTime function in the editor below. It should return an integer representing the minimum number of days required to complete the order.

// minimumTime has the following parameter(s):
// machines: an array of integers representing days to produce one item per machine
// goal: an integer, the number of items required to complete the order

function minTime(machines, goal) {
    // Helper function to calculate items produced in 'days' days
    function itemsProduced(days) {
        return machines.reduce((total, machine) => total + Math.floor(days / machine), 0);
    }

    // Initialize binary search bounds
    let left = 1;
    let right = Math.max(...machines) * goal;

    // Perform binary search
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (itemsProduced(mid) >= goal) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
}
