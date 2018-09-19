'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0;
  let current = 1;
  while (current < 1000) {
    if (!(current % 3) || !(current % 5)) sum += current;
    current += 1;
  }
  return sum;
}
console.log(sumMultiples3Or5Below1000());

// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;
  const min = Math.min(x, y);
  const max = Math.max(x, y);
  let currentMin = min;
  let currentMax = max;
  while (currentMin < z) {
    sum += currentMin;
    currentMin += min;
  }
  while (currentMax < z) {
    if (currentMax % min) sum += currentMax;
    currentMax += max;
  }
  return sum;
}
console.log(sumMultiplesXOrYBelowZ(3, 5, 1000));

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
