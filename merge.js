// merge function merges two sorted arrays into a single sorted array
function merge(left, right) {
    let resultArray = [], leftIndex = 0, rightIndex = 0;

    // Concatenate values into the resultArray in order
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            resultArray.push(left[leftIndex]);
            leftIndex++; // move left array cursor
        } else {
            resultArray.push(right[rightIndex]);
            rightIndex++; // move right array cursor
        }
    }

    // Concatenate the remaining elements (if any) from left array
    // (if left array had items left over)
    while (leftIndex < left.length) {
        resultArray.push(left[leftIndex]);
        leftIndex++;
    }

    // Concatenate the remaining elements (if any) from right array
    // (if right array had items left over)
    while (rightIndex < right.length) {
        resultArray.push(right[rightIndex]);
        rightIndex++;
    }

    // return the resultArray containing the merged sorted elements
    return resultArray;
}

// mergeSort function recursively splits the array and calls merge to sort the parts
function mergeSort(array) {
    // Base case or terminating case
    if (array.length <= 1) {
        return array;
    }

    // Divide the array into half
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle); // left half of the array
    const right = array.slice(middle); // right half of the array

    // Recursively call mergeSort on the left and right halves, and merge the sorted halves
    return merge(
        mergeSort(left), mergeSort(right)
    );
}


module.exports = { merge, mergeSort };
