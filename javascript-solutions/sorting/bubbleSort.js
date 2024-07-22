// Bubble Sort
function countSwaps(a) {
    let numSwaps = 0;
    let firstElement = 0;
    let lastElement = 0;
    let n = a.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                swap(a, j, j+1);
                numSwaps++;
            }
        }   
    }
    firstElement = a[0];
    lastElement = a[a.length-1];
    console.log(`Array is sorted in ${numSwaps} swaps.`);
    console.log(`First Element: ${firstElement}`);
    console.log(`Last Element: ${lastElement}`);
}

function swap(array, a, b) {
    let temp = array[a];
    array[a] = array[b];
    array[b] = temp;
}
