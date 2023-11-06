function selectionSort(arr) {
  // The outer loop goes over the entire array
  for (let i = 0; i < arr.length; i++) {
    // Assume the first element is the minimum
    let minIndex = i;
    // The inner loop goes over the unsorted part of the array
    for (let j = i + 1; j < arr.length; j++) {
      // Update minIndex if a smaller element is found
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    // If the current element is not the minimum, swap it with the found minimum
    if (i !== minIndex) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  // Return the sorted array
  return arr;
}

module.exports = selectionSort;
