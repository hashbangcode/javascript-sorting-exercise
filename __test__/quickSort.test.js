const quickSort = require('../quickSort');
const data = require('./testData');

test('quick sort algoithm correctly sorts lists of numbers', () => {
  data.forEach((sorting) => {
    const result = quickSort(sorting.array);
    expect(result).toStrictEqual(sorting.result);
  });
});
