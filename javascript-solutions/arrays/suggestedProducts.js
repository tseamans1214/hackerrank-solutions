function suggestedProducts(products, searchWord) {
    products.sort();  // Step 1: Sort the products lexicographically
    
    let result = [];
    let prefix = "";
    
    for (let char of searchWord) {
        prefix += char;  // Step 2: Generate the current prefix
        let suggestions = [];
        
        // Step 3: Find matches
        for (let product of products) {
            if (product.startsWith(prefix)) {
                suggestions.push(product);
                if (suggestions.length === 3) break;  // Only take up to three suggestions
            }
        }
        
        // Step 4: Store the results
        result.push(suggestions);
    }
    
    return result;
}
