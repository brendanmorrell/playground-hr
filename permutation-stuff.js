const permutator = inputArr => {
  let result = [];

  const permute = (arr, m = [], j = 0) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice(0, i).concat(arr.slice(i + 1));
        let next = arr[i];
        console.log(`curr=${curr}, next=${next}, newM=${m.concat(next)} j=${j}`);
        permute(curr, m.concat(next), j + 1);
      }
    }
  };

  permute(inputArr);

  return result;
};
// results []

// [2] [1]
//[] [2]
//push [2,1]
//
console.log(permutator([1, 2, 3]));

const stringPerm = str => {
  const results = [];
  const perms = (arr, memo = []) => {
    if (arr.length) {
      for (let i = 0; i < arr.length; i++) {
        let withoutCurrent = arr.slice(0, i).concat(arr.slice(i + 1));
        let currentChar = arr[i];
        perms(withoutCurrent, memo.concat(currentChar));
      }
    } else {
      results.push(memo.join(''));
    }
  };
  perms(str.split(''));
  return results;
};

console.log(stringPerm('acd'));

function getPermutations(string) {
  // base case
  if (string.length <= 1) {
    return new Set(string);
  }

  var allCharsExceptLast = string.slice(0, -1);
  var lastChar = string[string.length - 1];

  // recursive call: get all possible permutations for all chars except last
  var permutationsOfAllCharsExceptLast = getPermutations(allCharsExceptLast);

  // put the last char in all possible positions for each of the above permutations
  var permutations = new Set();
  permutationsOfAllCharsExceptLast.forEach(function(permutationOfAllCharsExceptLast) {
    for (var position = 0; position <= allCharsExceptLast.length; position++) {
      var permutation =
        permutationOfAllCharsExceptLast.slice(0, position) +
        lastChar +
        permutationOfAllCharsExceptLast.slice(position);
      permutations.add(permutation);
    }
  });

  return permutations;
}
//cat

//ca, t
// -> c, a
//permofall =[a], lastchar = a, allcharsexcept = c, perm = []

// -> '' + a +a
//
//
//
//
//
//
//
//
//
//
//
const anagrams = str => {
  const results = new Set();
  const getPerms = (word, anagram = '') => {
    if (!word) {
      results.add(anagram);
    } else {
      for (let i = 0; i < word.length; i++) {
        getPerms(word.slice(0, i) + word.slice(i + 1), anagram + word[i]);
      }
    }
  };
  getPerms(str);
  return results;
};

console.log(anagrams('asdf'));

const morePractice = str => {
  let results = new Set();
  const inner = (word, gram = '') => {
    if (!word) {
      results.add(gram);
    } else {
      for (let i = 0; i < word.length; i++) {
        const displacedChar = word[i];
        const gramMinusChar = word.slice(0, i) + word.slice(i + 1);
        inner(gramMinusChar, gram + displacedChar);
      }
    }
  };
  inner(str);
  return results;
};

console.log(morePractice('qwe'));
