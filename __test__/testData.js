const data = [
  {
    array: [3, 1, 2],
    result: [1, 2, 3],
  },
  {
    array: [7, 1, 4],
    result: [1, 4, 7],
  },
  {
    array: [10, 3, 2, 4, 6, 5, 7, 9, 8, 1],
    result: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    array: [9, 1, 1, 1, 1, 1, 1, 1, 1],
    result: [1, 1, 1, 1, 1, 1, 1, 1, 9],
  },
  {
    array: [1],
    result: [1],
  },
  {
    array: [3, 4, 5, 8, 2, 7, 3, 4, 0, 8, 9, 5, 6, 7, 2, 0, 3, 4, 8, 9, 7, 5, 6, 2, 3, 4],
    result: [0, 0, 2, 2, 2, 3, 3, 3,
      3, 4, 4, 4, 4, 5, 5, 5,
      6, 6, 7, 7, 7, 8, 8, 8,
      9, 9,
    ],
  },
];
module.exports = data;
