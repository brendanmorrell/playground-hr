const toByte = n => n.toString(2).padStart(4, 0);
const bitCompare = (x, y, op) => {
  console.log(`x=${x}, y=${y}`);
  console.log(`
    xByte = ${toByte(x)}
    yByte = ${toByte(y)}
  `);
  console.log(`${x} ${op} ${y} =`, eval(`x ${op} y`));
};

bitCompare(1, 1, '&');

// any NUM & 1 will return 0 if even, and 1 if odd, just like using NUM % 2
console.log((1 & 1) === 1 % 2); // both 0
console.log((2 & 1) === 2 % 2); // both 0
console.log((3 & 1) === 3 % 2); // both 0
console.log((4 & 1) === 4 % 2); // both 0
console.log((5 & 1) === 5 % 2); // both 1
console.log((6 & 1) === 6 % 2); // both 0
console.log((7 & 1) === 7 % 2); // both 1
console.log((8 & 1) === 8 % 2); // both 0

// use | to remove floating points, like Math.floor
console.log(3.324 | 3);
// double negation and & also do this
console.log(~~3.2);
console.log(3 & 3.2);
// all also work for ParseInt
console.log('3.324' | 3);
console.log(~~'3.2');
console.log(3 & '3.2');
console.log(typeof (3 & '3.2')); // 'number'
// 1 ^ 1 will be 0, so you set the result to 0, then if you do it again, 0 ^ 1 = 1 so it toggles
let foo = 1;
console.log((foo ^= 1));
console.log((foo ^= 1));
console.log((foo ^= 1));
console.log((foo ^= 1));

// using the not operator on indexof will change any number to a value, but -1 will be changed to 0, which when flipped will be tru
console.log(~0); // -1, ehich is truthy
console.log(~1); // -2, which is truthy
console.log(~-1); // 0, which when flipped is truthy
// thus
if (~[].indexOf('foo')) {
  // 'foo' exists in array
}
if (!~[].indexOf('foo')) {
  // 'foo' does not exist in array
}

// FIND MISSING NUMBERS
// Find Two Missing Numbers

// normal/summation method
const summation = n => {
  return (n * (n + 1)) / 2;
};
const findMissingNumber = arr => {
  // if it were not missing a num, length would be one greater. get what that sum is, and subtract the actual sum
  return summation(arr.length + 1) - arr.reduce((a, b) => a + b);
};
console.log(findMissingNumber([1, 2, 4]));

const missingNumXOR = arr => {
  let expected = arr.concat('').map((x, i) => i + 1);
  let XOR1 = arr.reduce((acc, x) => acc ^ x);
  let XOR2 = expected.reduce((acc, x) => acc ^ x);
  return XOR1 ^ XOR2;
};

console.log(missingNumXOR([1, 3, 6, 4, 2]));
// the thing to keep in mind is that any  number XOR itself is 0
// EX 0100 ^ 0100 = 0000
// so this really becomes
// (1^2^3^4^6) ^ (1^2^3^4^5^6)
// which we can view like this in terms of cancelling out, with the cancelled numbers equalling zero
// 1^2^3^4  ^6
// 1^2^3^4^5^6
//
// so it becomes
// 0^0^0^0^5^0
// which will leave 0^5 which = 5

// My own practice problem and solution. unlike the above, only works if sorted
const allMissingELements = arr => {
  const missingNums = [];
  for (let i = 0, j = 0; i < arr[arr.length - 1]; i++) {
    if ((i + 1) ^ arr[j]) missingNums.push(i + 1);
    else j += 1;
  }
  return missingNums;
};

console.log(allMissingELements([1, 9]));
