function bubbleSort(array) {
  let swapped;
  do {
    // This variable will track whether a swap has occurred during the pass.
    swapped = false;

    // Loop through the array. Note that we go up to the second-to-last element
    // because we're going to be comparing each item with the next one.
    for (let i = 0; i < array.length - 1; i++) {
      // If the current item is greater than the next item...
      if (array[i] > array[i + 1]) {
        // Swap the two items.
        let temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;

        // Since we made a swap, we'll need to check the list again.
        swapped = true;
      }
    }
    // Continue looping until no swaps are made in a pass.
  } while (swapped);

  // Once finished, return the sorted array.
  return array;
}

module.exports = bubbleSort;
