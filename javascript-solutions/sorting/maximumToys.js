// Standard array sort problem (least to greatest)
function maximumToys(prices, k) {
    let toysBought = 0;
    // Sort prices from lowest to highest
    prices = prices.sort(function(a,b){return a - b});
    // Loop through the prices
    let numToys = prices.length;
    for (let i=0; i<numToys; i++) {
        // If there is enough money to buy the current toy, subtract it from the total
        if (k >= prices[i]) {
            k = k - prices[i];
            // Increment counter for toysBought
            toysBought++;
        } else {
            // Else if there isn't enough money for the current toy, break out of the loop
            break;
        }  
    }
    // return toysBought
    return toysBought;
}
