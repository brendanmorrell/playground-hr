// Some languages have "if" statements that are closed by "fi" instead of curly brackets. Or they close a "case" with "esac",
// i.e. the same keyword backwards. for this problem we'll check that all words in a string are "closed". Write a function that
// takes a string and returns true if every word is closed by its backwards counterpart. Words must be separated by space or
// punctuation.

// matchWord('__END_DNE-----');  -> true
// matchWord('__ENDDNE__');  -> false       (not separated by a space)
// matchWord('IF()()fi[]');  -> true        (should be case-insensitive)
// matchWord('for__if__rof__fi');  -> false     not properly closed. like ( [) ]
// matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw');  -> true
// matchWord('');  -> true

// first, grab all the words and put in an array
// iterate through array, push each worrd to a stack
// if you encounter a word and it is the reverse of the last item in the stack, pop that item off the stack and move on
// else, push onto stack

function matchWord(str) {
  const stack = [];
  const wordsArr = str
    .replace(/[.,\/#!$%@\^&\\[\]*;:{}=\-_`~()]/gi, ' ')
    .replace(/\s{2,}/g, ' ')
    .toLowerCase()
    .split(' ')
    .filter(x => x);
  wordsArr.forEach((word) => {
    if (!stack.length) {
      stack.push(word);
    } else if (
      stack[stack.length - 1] &&
      stack[stack.length - 1]
        .split('')
        .reverse()
        .join('') === word
    ) {
      stack.pop();
    }
  });

  return !stack.length;
}

matchWord('__END_DNE-----'); /*   -> true */
console.log(matchWord('__END_DNE-----'));
matchWord('__ENDDNE__'); /*   -> false       (not separated by a space) */
console.log(matchWord('__ENDDNE__'));
matchWord('IF()()fi[]'); /*   -> true        (should be case-insensitive) */
console.log(matchWord('IF()()fi[]'));
matchWord('for__if__rof__fi'); /*   -> false     not properly closed. like ( [) ] */
console.log(matchWord('for__if__rof__fi'));
matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'); /*  -> true */
console.log(matchWord('%%$@$while  try ! yrt  for if_fi rof #*#  elihw'));
console.log(matchWord('')); /* true */
module.exports = matchWord;
