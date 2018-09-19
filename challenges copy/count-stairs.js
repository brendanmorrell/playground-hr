/* You are faced by a staircase that is N steps high. You can take 1 or 2 steps at a time. Write
 * a function to calculate how many different ways you can go up the flight of stairs.
 *
 * Example: n === 5. You are 5 steps away from the top. You can take these different ways to the top:
 * 1 + 1 + 1 + 1 + 1
 * 1 + 1 + 1 + 2
 * 1 + 1 + 2 + 1
 * 1 + 2 + 1 + 1
 * 1 + 2 + 2
 * 2 + 1 + 1 + 1
 * 2 + 1 + 2
 * 2 + 2 + 1
 *
 * That is a total of 8 different ways to take 5 steps, given that you can take 1 or 2 steps at a time.
 */

function countStairs(n, count = n, cache = {}) {
  if (n < 0 || count < 0) return 0;
  if (cache[count]) return cache[count];
  if (count === 0) return 1;
  cache[n] = countStairs(n, count - 1, cache) + countStairs(n, count - 2, cache);
  return cache[n];
}
console.log(countStairs(4));
module.exports = countStairs;
