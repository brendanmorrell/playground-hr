// Have the function knightjumps(str) read str which will be a
// string consisting of the location of a knight on a standard 8x8 chess board with no other pieces on the board.

// The structure of str will be the following string: "(x y)" which represents the position of the knight with x and y ranging
// from 1 to 8.

// Your function should determine the number of spaces the knight can move to from a given location.
// For example: if str is "(4 5)" then your program should output 8 because the knight can move to 8 different spaces
// from position x = 4 and y = 5.
//  example input:
// var str = "(4 5)"

function knightjumps(str) {
  Number.prototype.between = function(floor, ceil) {
    return this > floor && this < ceil;
  };
  let x = +str[1];
  let y = +str[3];
  let jumps = [[2, -1], [2, 1], [1, 2], [-1, +1], [-2, 1], [-2, -1], [-1, -2], [1, -2]];
  return jumps.reduce((acc, jump) => {
    let xPos = jump[0] + x;
    let yPos = jump[1] + y;
    return xPos.between(0, 9) && yPos.between(0, 9) ? acc + 1 : acc;
  }, 0);
}
console.log(knightjumps('(0 4)'));
module.exports = knightjumps;
