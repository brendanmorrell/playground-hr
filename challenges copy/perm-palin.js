/**
 * Given a string, determine if any of the permutations of that string is a palindrome
 *
 * Example:
 * 	- permPalin('abab') => true
 * 	- permPalin('cbaba') => true
 * 	- permPalin('cbac') => false
 * 	- permPalin('a') => true
 *
 */

function permPalin(str) {
  if (!str || typeof str !== 'string') return undefined;
  const cache ={}
  let length = str.length
  for (let i = 0; i < length; i++) {
    if(acc[x])
  }
}
console.log(permPalin());

permPalin('abab'); /*  => true */
console.log('​ permPalin(abab)', permPalin('abab'));
permPalin('cbaba'); /*  => true */
console.log('​ permPalin(cbaba)', permPalin('cbaba'));
permPalin('cbac'); /*  => false */
console.log('​permPalin(cbac)', permPalin('cbac'));
permPalin('a'); /*  => true */
console.log('​ permPalin(a)', permPalin('a'));

module.exports = permPalin;
