/* Given a positive integer, return it as a string in Roman Numeral form.
 * Some basic conversions are given below:
 *
 *      1     ->    I
 * 2 II
 * 3III
 *      4     ->    IV
 *      5     ->    V
 * 6VI
 * 7VII
 * 8VIII
 *      9     ->    IX
 *      10    ->    X
 * 11XI
 * 12XII
 * 13XIII
 * 14XIV
 *
 *      40    ->    XL
 *      50    ->    L
 *      90    ->    XC
 *      100   ->    C
 *      400   ->    CD
 *      500   ->    D
 *      900   ->    CM
 *      1000  ->    M
 *
 */

// have helper function for subtraction
// takes in string, grabs the highest value item in string
// adds all initial similar items together
// subtracts the lower value items total from the highest value
// returns new value

// have object of value mappings
// have keyArr of possible values i,v,x,l,c,d,m
// divide string into a strArr

// create total var
// iterate over strArr
// check if value to the right is greater or equal in keyArr
// if greater, slice string until (including) you find a greater value,
// pass this string into helper function, and add the return value to the total
// move index to the value after the slice
// if lesser, add the value of the char fromt he keys map to the total

function romanNumeral(n) {
  let total = 0;
  const numeralValues = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  function calculateTotalValueOfSubtractiveNumerals(arr) {
    let totalToSubtract = 0;
    arr.forEach((char) => {
      if (numeralValues[char] < numeralValues[arr[arr.length - 1]]) {
        totalToSubtract += numeralValues[char];
      }
    });
    return numeralValues[arr[arr.length - 1]] - totalToSubtract;
  }
  const strArr = n.split('');
  for (let i = 0; i < strArr.length; i++) {
    const char = strArr[i];
    const greaterNumToRight = strArr.find((char, j) => j > i && numeralValues[char] > numeralValues[strArr[i]]);
    const indexOfGreaterNum = strArr.indexOf(greaterNumToRight);
    if (indexOfGreaterNum !== -1) {
      const slice = strArr.slice(i, indexOfGreaterNum + 1);
      total += calculateTotalValueOfSubtractiveNumerals(slice);
      i = indexOfGreaterNum;
    } else {
      total += numeralValues[char];
    }
  }

  return total;
}
console.log(romanNumeral('I'));
console.log(romanNumeral('II'));
console.log(romanNumeral('III'));
console.log(romanNumeral('IV'));
console.log(romanNumeral('V'));
console.log(romanNumeral('VI'));
console.log(romanNumeral('VII'));
console.log(romanNumeral('VIII'));
console.log(romanNumeral('IX'));
console.log(romanNumeral('X'));
console.log(romanNumeral('XI'));
console.log(romanNumeral('IXX'));
console.log(romanNumeral('XX'));

module.exports = romanNumeral;
