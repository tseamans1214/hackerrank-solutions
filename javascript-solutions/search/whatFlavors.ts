// Each time Sunny and Johnny take a trip to the Ice Cream Parlor, they pool their money to buy ice cream. On any given day, the parlor offers a line of flavors. Each flavor has a cost associated with it.

// Given the value of  and the  of each flavor for  trips to the Ice Cream Parlor, help Sunny and Johnny choose two distinct flavors such that they spend their entire pool of money during each visit. ID numbers are the 1- based index number associated with a . For each trip to the parlor, print the ID numbers for the two types of ice cream that Sunny and Johnny purchase as two space-separated integers on a new line. You must print the smaller ID first and the larger ID second.
/*
 * Complete the 'whatFlavors' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY cost
 *  2. INTEGER money
 */

function whatFlavors(cost, money) {
    let costMap = new Map();
    let costArrayLength = cost.length;
    // Add all costs to a map, cost->index of num used
    for (let i=0; i < costArrayLength; i++) {
        let validNumber = money - cost[i];
        if (validNumber > 0) {
            // Note index is increased by one (i+1) because problem index starts at 1
            costMap.set(validNumber, i+1);
        }
    }
    // Loop through all costs and see if needed number is in map
    for (let i=0; i < costArrayLength; i++) {
        // If found, print intial index used and current index and it is not equal to the current index
        if (costMap.has(cost[i]) && i+1 != costMap.get(cost[i])) {
            let currentCost = cost[i];
            // Check if the current index is less than the found index to print the smaller index first
            if (i+1 < costMap.get(currentCost)) {
                console.log(`${i+1} ${costMap.get(currentCost)}`);
                break;
            } else {
                console.log(`${costMap.get(currentCost)} ${i+1}`);
                break;
            }
        }
    }

}
