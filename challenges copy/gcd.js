/**
 * Given two integers, return the greatest common divisor.
 *
 * Example:
 * gcd(10, 8) -> 2
 * gcd(10, 9) -> 1
 *
 */

function gcd(a, b) {
  if ((a < 0 || b < 0) && !(a < 0 && b < 0)) return false;
  let max = Math.max(a, b);
  let min = Math.min(a, b);
  let rem = max % min;
  while (rem) {
    max = min;
    min = rem;
    rem = max % min;
  }
  return Math.abs(min);
}

console.log(gcd(10, 8));
console.log(gcd(10, 9));
console.log(gcd(-10, -5));

module.exports = gcd;
