/* You are given a string that represents a binary number
 *
 * Write a function that converts the binary string to a decimal number
 *
 * Example:
* 	binToDec('0')   -> 0
 * 	binToDec('11')  -> 3
 * 	binToDec('100') -> 4
 * 	binToDec('101') -> 5
 *  binToDec('0101') -> 5
 *
 * Extension:
 * Write a function that converts a decimal number to binary (then maybe hexadecimal)
 */

function binToDec(binary) {
  let total = 0;
  const binarryArray = binary.split('').reverse();
  for (let i = 0; i < binarryArray.length; i += 1) {
    const digit = binarryArray[i];
    if (digit === '1') total += 2 ** i;
  }
  return total;
}

function hexToDec(hex) {
  let total = 0;
  const hexValueOrder = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  };
  const hexArr = hex
    .split('')
    .reverse()
    .map(x => (Number(x) ? x : x.toLowerCase()));
  for (let i = 0; i < hexArr.length; i += 1) {
    const digit = hexArr[i];
    const value = hexValueOrder[digit];
    total += value * 16 ** i;
  }
  return total;
}

module.exports = binToDec;
