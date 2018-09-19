/**
 * Write a function that will take an array of integers, all of which will appear exactly twice,
 * except for one integer that will appear exactly once. Return the integer that appears once.
 *
 * uniqueNumber([1,2,1,3,3]); -> 2
 *
 * BONUS:
 * Complete the challenge in O(n) time
 * Complete the challenge in O(1) space
 *
 */
function uniqueNumber(array) {
  const singles = new Set();
  array.forEach(x => {
    if (!singles.has(x)) singles.add(x);
    else singles.delete(x);
  });
  return [...singles][0];
}
console.log(uniqueNumber([1, 2, 3, 2, 3]));
module.exports = uniqueNumber;
