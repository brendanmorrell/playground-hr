/*
 * Given an array of numbers, determine if the mode and mean of the array are equivalent
 *
 * Caveats:
 * 	- Math.floor the mean
 * 	- If there are multiple modes, use the max of the modes
 *
 * Return true or false
 *
 */
function modemean(array) {
  if (!array.length) {
    return true;
  }
  const mean = array.reduce((acc, num) => acc + num) / array.length;
  let countObj = array.reduce((acc, x) => {
    if (acc[x]) acc[x] = acc[x] += 1;
    if (!acc[x]) acc[x] = 1;
    return acc;
  }, {});
  const mode = +Object.entries(countObj).reduce((acc, x) => {
    return x[1] > acc[1] || (x[1] === acc[1] && +x[0] > +acc[0]) ? x : acc;
  })[0];

  return mean === mode;
}

module.exports = modemean;
