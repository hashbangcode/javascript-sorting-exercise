/**
 * Sort an array using the bubblesott algorithm.
 *
 * @param array array
 *   The array to sort.
 *
 * @returns
 *   The sorted array.
 */
function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        const x = array[j + 1];
        array[j + 1] = array[j];
        array[j] = x;
      }
    }
  }
  return array;
}

module.exports = bubbleSort;
