const _ = require('lodash'); // Using require statement
import _ from 'lodash'; // Using ES6 import statement



const array = [1, 2, 3, 4, 5];

const sum = _.sum(array); // Returns the sum of all numbers in the array
const average = _.mean(array); // Returns the average of all numbers in the array
const chunkedArray = _.chunk(array, 2); // Returns an array of chunks with two items each


const nestedArray = [1, [2, [3, [4]], 5]];

const flattenedArray = _.flattenDeep(nestedArray);

console.log(flattenedArray); // Output: [1, 2, 3, 4, 5]
