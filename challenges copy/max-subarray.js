/* You are given an array of integers with both positive and negative numbers. Write a function to
 * find the maximum sum of all subarrays. A subarray is a section of consecutive elements from the
 * original array. The whole array can be considered a sub array of itself.
 *
 * For example: maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]) -> 18 from [3, 10, -4, 7, 2]
 *              maxSubarray([15,20,-5,10])  -> 40
 *
 */

function maxSubarray(arr) {
  if (!arr.length) return 0;
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length + 1; j++) {
      const arrSum = arr.slice(i, j).reduce((acc, x) => acc + x);
      if (arrSum > max) max = arrSum;
    }
  }
  return max;
}

console.log(maxSubarray([1, -2, 3, 10, -4, 7, 2, -5]));
console.log(maxSubarray([3, 10, -4, 7, 2]));
console.log(maxSubarray([15, 20, -5, 10]));

module.exports = maxSubarray;
