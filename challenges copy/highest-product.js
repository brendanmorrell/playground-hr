/**
 * Given an array of integers, find the highest product you can get from three of the integers.
 */

function highestProduct(array) {
  if (array.constructor.name !== 'Array') return 0;
  const sorted = array.sort((a, b) => a - b);
  const highestPos = sorted.slice(-3);
  if (highestPos.length < 3) return 0;
  const highestNeg = sorted.filter(x => x < 0).slice(0, 2);
  if (highestNeg.length < 2) return highestPos.reduce((total, x) => total * x);
  if (!highestPos.filter(x => x < 0).length) {
    if (highestNeg[0] * highestNeg[1] > highestPos[2] * highestPos[1]) {
      highestPos[2] = highestNeg[0];
      highestPos[1] = highestNeg[1];
      console.log(highestPos);
    } else if (highestNeg[0] * highestNeg[1] > highestPos[0] * highestPos[1]) {
      highestPos[1] = highestNeg[0];
      highestPos[0] = highestNeg[1];
    }
  } else {
    highestPos[1] = highestNeg[0];
    highestPos[0] = highestNeg[1];
  }
  return highestPos.reduce((total, x) => total * x);
}

module.exports = highestProduct;

function highestProduct(array, iteration = 0) {
  if (iteration === 3) {
    return array[0]};
  return array[0] * highestProduct(array.slice(1), iteration + 1) || highestProduct(array.slice(1), iteration + 1);
}

console.log(highestProduct([3, 8]));
