/* You are given a NxN grid of elements represented by a 2D array. The ith nested array represents
 * the ith row in the grid.
 *
 * Write a function to rotate the grid 90 degrees clockwise.
 *
 * For example:     sampleGrid before:  [   [1, 2, 3],
 *                                          [4, 5, 6],
 *                                          [7, 8, 9]  ]
 *
 *                  rotateGrid(sampleGrid, 3);
 *
 *                  sampleGrid after:   [   [7, 4, 1],
 *                                          [8, 5, 2],
 *                                          [9, 6, 3]  ]
 *
 * BONUS: Do this in place
*/

function rotateGrid(grid, n) {
  const mtx = grid.map(row => row.slice());
  for (let i = 0; i < mtx.length; i += 1) {
    for (let j = 0; j < mtx[i].length; j += 1) {
      mtx[i][j] = grid[n - 1 - j][i];
    }
  }
  return mtx;
}

const grid = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(rotateGrid(grid, 3));

module.exports = rotateGrid;
