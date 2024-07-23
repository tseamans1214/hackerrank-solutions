function countInversions(arr) {
    // Helper function to merge two halves and count inversions
    function mergeAndCount(arr, temp, left, mid, right) {
        let i = left, j = mid, k = left;
        let inversions = 0;

        while ((i <= mid - 1) && (j <= right)) {
            if (arr[i] <= arr[j]) {
                temp[k++] = arr[i++];
            } else {
                temp[k++] = arr[j++];
                inversions += (mid - i);
            }
        }

        while (i <= mid - 1) {
            temp[k++] = arr[i++];
        }

        while (j <= right) {
            temp[k++] = arr[j++];
        }

        for (i = left; i <= right; i++) {
            arr[i] = temp[i];
        }

        return inversions;
    }

    // Helper function to divide the array and count inversions
    function mergeSortAndCount(arr, temp, left, right) {
        let mid, inversions = 0;
        if (right > left) {
            mid = Math.floor((right + left) / 2);

            inversions += mergeSortAndCount(arr, temp, left, mid);
            inversions += mergeSortAndCount(arr, temp, mid + 1, right);
            inversions += mergeAndCount(arr, temp, left, mid + 1, right);
        }
        return inversions;
    }

    let temp = Array.from(arr);
    return mergeSortAndCount(arr, temp, 0, arr.length - 1);
}
