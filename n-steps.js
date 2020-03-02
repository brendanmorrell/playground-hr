// There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time.
//  Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.

// For example, if N is 4, then there are 5 unique ways:

// 1, 1, 1, 1
// 2, 1, 1
// 1, 2, 1
// 1, 1, 2
// 2, 2

let count = 0;

const stepper = steps => {
  count += 1;
  if (steps < 0) return 0;
  if (steps === 0) return 1;
  return stepper(steps - 1) + stepper(steps - 2);
};

let count2 = 0;
const stepper2 = (steps, memo = {}) => {
  count2 += 1;
  if (memo[steps]) return memo[steps];
  if (steps < 0) return 0;
  if (steps === 0) return 1;
  const res = stepper2(steps - 1, memo) + stepper2(steps - 2, memo);
  memo[steps] = res;
  return res;
};

// const dynamicStepper = steps => {
//   if (steps < 0) return 0;
//   if (steps === 0) return 1;
//   return (
//     dynamicStepper(steps - 1) +
//     dynamicStepper(steps - 2) +
//     dynamicStepper(steps - 3)
//   );
// };

const step = steps => {};

const dynamicStepper = (steps = 0, options = []) => {
  count += 1;
  return options.reduce((acc, x) => acc + stepper(steps - x), 0);
};

const dynamicStepper2 = (steps = 0, options = [], memo = {}) =>
  memo[steps] ||
  ((memo[steps] = options
    .map(x => stepper2(steps - x, memo))
    .reduce((acc, x) => acc + x, 0)),
  memo[steps]);

// 1,2,3

// 1,1,1,1
// 1,1,2
// 1,2,1
// 2,1,1
// 3,1
// 1,3

console.log(dynamicStepper(30, [1, 2, 3, 4]));
console.log(dynamicStepper2(30, [1, 2, 3, 4]));
console.log(count);
console.log(count2);
