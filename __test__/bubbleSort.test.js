const bubbleSort = require('../bubbleSort');
const data = require('./testData');

test('bubble sort algoithm correctly sorts lists of numbers', () => {
  data.forEach((sorting) => {
    const result = bubbleSort(sorting.array);
    expect(result).toStrictEqual(sorting.result);
  });
});
