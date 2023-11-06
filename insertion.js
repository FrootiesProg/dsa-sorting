function insertionSort(array) {
  // Start from the second element (position 1) because the first item is already "sorted"
  for (let i = 1; i < array.length; i++) {
    // `currentValue` is the item in the array to be inserted into the sorted portion
    let currentValue = array[i];
    // `j` represents the index for the last element in the sorted portion of the array
    let j = i - 1;

    // Move elements of the sorted portion of the array that are greater than the
    // `currentValue` to one position ahead of their current position
    while (j >= 0 && array[j] > currentValue) {
      array[j + 1] = array[j];
      j--;
    }

    // Insert the `currentValue` at the correct position in the sorted portion
    array[j + 1] = currentValue;
  }

  // Return the sorted array.
  return array;
}

module.exports = insertionSort;
