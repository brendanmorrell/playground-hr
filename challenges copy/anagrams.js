// /**
//  * Given a single input string, write a function that produces all possible anagrams
//  * of a string and outputs them as an array. At first, don't worry about
//  * repeated strings.  What time complexity is your solution?
//  *
//  * Extra credit: Deduplicate your return array without using uniq().
//  */

// /**
//  * example:
//  * var result = anagrams('abc');
//  * console.log(result); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
//  */
// function anagrams(string) {
//   const anagrams = [];
//   const arr = string.split('');
//   for (let i = 0; i < arr.length; i++) {
//     let temp = arr.slice(0, i).concat(arr.slice(i + 1));
//     let temp2 = temp.slice();
//     temp2.reverse();
//     let char = arr[i];
//     const str1 = temp.concat(char).join('');
//     const str2 = temp2.concat(char).join('');
//     for (let index = 0; index < array.length; index++) {
//       const element = array[index];
//     }
//     if (!anagrams.includes(str1)) anagrams.push(str1);
//     if (!anagrams.includes(str2)) anagrams.push(str2);
//   }
//   return anagrams;
// }
// console.log(anagrams('abcd'));

// anagrams('abc');
// module.exports = anagrams;

// function anagramsTwo(str) {
//   // create array to store combinations
//   const grams = [];
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     const current = str.slice(0, i) + str.slice(i + 1);
//   }
//   // iterate over each char and call a recursive function that places that char in all the different positions it could be at in that str
//   // remove duplicates from the resulting array of grams;
// }

// const network = {
//   Min: ['William', 'Jayden', 'Omar'],
//   William: ['Min', 'Noam'],
//   Jayden: ['Min', 'Amelia', 'Ren', 'Noam'],
//   Ren: ['Jayden', 'Omar'],
//   Amelia: ['Jayden', 'Adam', 'Miguel'],
//   Adam: ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
//   Miguel: ['Amelia', 'Adam', 'Liam', 'Nathan'],
//   Noam: ['Nathan', 'Jayden', 'William'],
//   Omar: ['Ren', 'Min', 'Scott'],
// };
// function mashMessage(network, target) {
//   const counts = {};
//   function traverseNetwork(user, target, i = 0, count = 0, path = [user]) {
//     if (path.includes(network[user][i])) i ++;
//     if (!network[user[i]]) return;
//     const nextUser = network[user][i]
//     path = path.concat(nextUser)
//     if (user === target) {
//       counts[count] = path;
//       return;
//     }
//     if (!network[user].length || !user) return;
//     return traverseNetwork()
//   }
//   for (const user in network) {
//     traverseNetwork(user);
//   }
// }
// mashMessage(network);
