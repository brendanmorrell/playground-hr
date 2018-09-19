// /* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
//  The staircase must climb up from left to right. The last line should only consist of asterisks,
//  without any leading/trailing spaces.

//  For example:     
//  drawStairs(6) ->          
//      *
//     **
//    ***
//   ****
//  *****
// ******

// */

function drawStairs(n) {
    let depth = 1;
    let result = '';
    while (depth <= n) {
        for (let i = 0; i < n; i += 1) {
            result += i < n - depth ? ' ' : '*';
        }
        result += '\n';
        depth += 1;
    }
    console.log(result.length);
    return result;
}




module.exports = drawStairs;


// function drawStairs(n) {
//     let depth = 1;
//     let result = '';
//     while (n >= depth) {
//         if (n > depth) {
//             result += ' ';
//         } else {
//             result += '*';
//         }
//         console.log(n);
//         console.log(result);
//         console.log(depth);

//         depth += 1;
//         result += '\n'
//     }
//     console.log(result.length);
//     return result;
// }
