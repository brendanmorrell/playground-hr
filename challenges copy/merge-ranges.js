/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */

function whatever(arr) {
  return arr.reduce((acc, x) => {
    if (acc.find(y => x[0] === y[0] || x[1] === y[1])) {
      return acc;
    }
    acc.push(x);
    return acc;
  }, []);
}

function mergeRanges(array) {
  const mergedArr = [];
  const mergedIs = [];
  for (let i = 0; i < array.length; i += 1) {
    const range1 = array[i];
    const range1Min = range1[0];
    const range1Max = range1[1];
    for (let j = i + 1; j < array.length; j += 1) {
      const range2 = array[j];
      const range2Min = range2[0];
      const range2Max = range2[1];
      if (
        (range1Min >= range2Min && range1Min <= range2Max) ||
        (range1Max >= range2Min && range1Max <= range2Max)
      ) {
        mergedArr.push([Math.min(...range1, ...range2), Math.max(...range1, ...range2)]);
        mergedIs.push(i, j);
      } else if (j === array.length - 1) {
        mergedArr.push(range1);
      }
    }
  }
  return whatever(mergedArr);
}
const times = [
  [0, 1],
  [3, 5],
  [4, 8],
  [10, 12],
  [9, 10],
  [0, 1],
  [3, 5],
  [4, 8],
  [10, 12],
  [9, 10],
  [0, 1],
  [3, 5],
  [4, 8],
  [10, 12],
  [9, 10],
];
console.log(mergeRanges(times));

module.exports = mergeRanges;
