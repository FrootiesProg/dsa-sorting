function pivot(arr, start = 0, end = arr.length - 1) {
    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIndex = start;

    // Function to swap elements in the array
    const swap = (array, i, j) => {
        [array[i], array[j]] = [array[j], array[i]];
    };

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }

    // Swap the starting element (pivot) with the swapIndex element
    swap(arr, start, swapIndex);
    return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        // Get the index of the pivot element after positioning
        let pivotIndex = pivot(arr, left, right);
        
        // Recursively apply the same logic to the sub-array to the left of the pivot
        quickSort(arr, left, pivotIndex - 1);
        
        // Recursively apply the same logic to the sub-array to the right of the pivot
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr; // Base case is when left >= right, which means the array is sorted
}

module.exports = quickSort;
