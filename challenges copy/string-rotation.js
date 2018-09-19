/* Given two strings, write a function to check if the second one is a rotation of the first,
 * using only one call to isSubstring. The function isSubstring takes in two strings and returns
 * true if the second string is found in the first, false otherwise.
 *
 * h->e->l->l->o   ===   l->l-o->h->e
 * h->e->l->l->o   !==   o->l-l->h->e
 *
 * For example: stringRotation("hello", "hello") -> true
 *              stringRotation("hello", "llohe") -> true
 *              stringRotation("hello", "he") -> false
 *              stringRotation("hello", "ollhe") -> false (not a rotation, just an anagram)
 */

function isSubstring(s1, s2) {
  return s1.indexOf(s2) >= 0;
}

function stringRotation(s1, s2) {
  let s2IndexOfS1Start = s2.indexOf(s1[0]);
  if (s2IndexOfS1Start !== 0) s2IndexOfS1Start -= 1;
  const frontString = s1.slice(0, s2IndexOfS1Start);
  const backSubstring = s1.slice(s2IndexOfS1Start);
  const rotatedString = backSubstring + frontString;
  return isSubstring(s2, rotatedString);
}

module.exports = { isSubstring, stringRotation };
