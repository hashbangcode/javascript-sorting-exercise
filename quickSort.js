/**
 * Sort an array using the quicksort algorithm.
 *
 * @param array array
 *   The array to sort.
 *
 * @returns
 *   The sorted array.
 */
function quickSort(array) {
  if (array.length === 0) {
    return array;
  }

  const k = array[0];
  const x = [];
  const y = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] <= k) {
      x.push(array[i]);
    } else {
      y.push(array[i]);
    }
  }
  return quickSort(x).concat([k]).concat(quickSort(y));
}

module.exports = quickSort;
