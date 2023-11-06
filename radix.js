function radixSort(arr) {
  // Helper function to get the digit at the given place value
  const getDigit = (num, place) =>
    Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;

  // Helper function to determine the number of digits in a number
  const digitCount = (num) =>
    num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1;

  // Helper function to determine the maximum number of digits in any number in the array
  const mostDigits = (nums) =>
    Math.max(...nums.map((number) => digitCount(number)));

  // Determine how many times the sorting process needs to loop
  let maxDigitCount = mostDigits(arr);

  // Loop from k = 0 up to this largest number of digits
  for (let k = 0; k < maxDigitCount; k++) {
    // Create buckets for each digit (0 to 9)
    let digitBuckets = Array.from({ length: 10 }, () => []);

    // Place each number in the corresponding bucket based on its k-th digit
    for (let i = 0; i < arr.length; i++) {
      let digit = getDigit(arr[i], k);
      digitBuckets[digit].push(arr[i]);
    }

    // Reconstruct the array by concatenating all sub-arrays
    arr = [].concat(...digitBuckets);
  }

  // Return the sorted array
  return arr;
}

module.exports = radixSort;
