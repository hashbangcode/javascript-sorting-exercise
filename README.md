# Javascript Sorting Algorithms Exercise

This project sets up an environment ready for two sorting algorithms to be created.

The algorithms are as follows:

### Bubble Sort
This algorithm works by running through the array and swapping a value for the next value along if that value is less than the current value. After the first run through the highest value in the array will be at the end of the array. It therefore must run through the array once for every item in the array, so it has a low efficiency.

### Quick Sort
This algorithm works by splitting the array into smaller and smaller pieces eventually merging the array back together again at the end. It does this by first finding a middle point and then spitting the array depending on if the current value is higher or lower than the middle value. It then recursively calls itself in order to do the same to each section of the array before rebuilding the sorted array and returning it.

## Requirements

You must be running at least node version 14.0 to allow the Jest testing library to work.

## Files

- bubleSort.js - A file ready to have the bubble sort algorithm implemented.
- quickSort.js - A file ready to have the quick sort algorithm implemented.
- \_\_test\_\_ - A directory containing test files. The testData.js file is used to store testing data.

## Usage

Open up the exercise in your text editor of choice. You will see that the core of the functions in the *Sort.js files are empty.

Run the tests for the package by running the command `npm run test`. This will show you that the tests are failing.

You can run `npm run test-bubble`, and `npm run test-quick` to run the tests for a single sorting algorithm.

Write the sorting algorithms in the function, this should take an array as an argument and return the same array with sorted numbers.

Once everything is working you will be able to run `npm run test` and see a set of passing tests.

## Eslint

Eslint has been added to the package to allow users doing the exercise to ensure they are following best practice.

Run `npm run eslint` to check the coding styles of the package.

Run `npm run eslint-fix` to fix many simple coding style problems like incorrect whitespace.
