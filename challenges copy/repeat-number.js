/**
 * I have an array where every number in the range 1...n appears once except for
 * one number which appears twice.
 *
 * Write a function for finding the number that appears twice.
 *
 * BONUS:
 * Do this in O(n) time
 * Do this in O(1) space
 *
 */

// function repeatNumbers(array) {
//   let nums = new Set();
//   for (let i = 0; i < array.length; i += 1) {
//     const num = array[i];
//     if (nums.has(num)) {
//       nums = num;
//       break;
//     }
//     nums.add(num);
//   }
//   return nums.constructor.name === 'Set' ? null : nums;
// }

function repeatNumbers(array) {
  try {
    array.sort((a, b) => {
      if (a === b) throw Error(a);
    });
  } catch ({ message }) {
    return message;
  }
}
const array = [1, 22, 2, 3, 4, 5, 6, 60, 7, 8, 9, 0, 2];
console.log(repeatNumbers(array));

module.exports = repeatNumbers;
