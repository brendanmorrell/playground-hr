/**
 *
 * You are given an array x and an array y that represent the coordinates of several OLD points
 *
 *   - x is the array of x-coordinates and y is the array of y-coordinates
 *   - (x[i], y[i]) correspond to coordinates of the i'th OLD point
 *
 * Write an algorithm to find the number of NEW points that can be placed
 * such that there are OLD points above, below, to the left, and to the right of the NEW point
 *
 *   - 'OLD directly above NEW' means the NEW x-coordinate = OLD x-coordinate & NEW y-coordinate < OLD y-coordinate
 *
 * Constraints and Notes:
 *
 * 	 - x and y will contain the same number of elements
 *   - if a new point is bounded by old points and lands on an old point, then count it
 *
 */

function newIntersections(x, y) {
  const intersections = [];
  // find x range and y range
  // nested for loop for x and y that goes the length of the range and checks if that x/y is such that
  // an element exists that is less than that x, greater than that x, and same for y
  const xRange = [Math.min(...x) + 1, Math.max(...x) - 1];
  const yRange = [Math.min(...y) + 1, Math.max(...y) - 1];
  for (let i = xRange[0]; i <= xRange[1]; i += 1) {
    const xVal = i;
    for (let j = yRange[0]; j <= yRange[1]; j++) {
      const yVal = j;
      let toLeft;
      let toRight;
      let above;
      let below;
      x.forEach((coord, i) => {
        if (y[i] === yVal && coord < xVal) toLeft = true;
        if (y[i] === yVal && coord > xVal) toRight = true;
        if (coord === xVal && y[i] > yVal) above = true;
        if (coord === xVal && y[i] < yVal) below = true;
      });
      if (toLeft && toRight && above && below) intersections.push([xVal, yVal]);
    }
  }
  console.log(intersections);
}
const x = [1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 4, 4,4,3,4,4];
const y = [1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 1,3,4,2,3];
newIntersections(x, y);

module.exports = newIntersections;
