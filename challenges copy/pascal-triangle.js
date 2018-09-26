/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

function pascalTriangle(numRows) {
  let result = [];
  let count = 0;
  while (count < numRows) {
    let nested = [];
    for (let i = 0; i <= count; i += 1) {
      if (i === 0 || i === count) nested.push(1);
      else nested.push(result[count - 1][i] + result[count - 1][i - 1]);
    }
    result.push(nested);
    count += 1;
  }
  return result;
}

// console.log(pascalTriangle(6));
module.exports = pascalTriangle;

/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

const pasc = n => {
  let result = [[1]];
  let row = 1;
  while (row < n) {
    let nextRow = [];
    for (let i = 0; i <= row; i++) {
      if (i === 0 || i === row) nextRow.push(1);
      else nextRow.push(result[row - 1][i - 1] + result[row - 1][i]);
    }
    result.push(nextRow);
    row += 1;
  }
  return result;
};
console.log(pasc(5));
