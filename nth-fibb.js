const nthFibb = n => {
  if (n <= 1) return 1;
  return nthFibb(n - 1) + nthFibb(n - 2);
};
//1 1 2 3 5 8 13 21
console.log(nthFibb(5));
const nonRecursive = n => {
  if (n < 1) return undefined;
  const tracker = {
    last: 0,
    total: 1,
  };
  let count = 1;
  while (count < n) {
    let temp = tracker.last;
    tracker.last = tracker.total;
    tracker.total += temp;
    count += 1;
  }
  return tracker.total;
};

console.log(nonRecursive(200));

const memoized = (num, memo = {}) => {
  if (memo[num]) return memo[num];
  if (num <= 1) return 1;
  return (memo[num] = memoized(num - 1, memo) + memoized(num - 2, memo));
};
console.log(memoized(7));

const closureMemo = () => {
  const answers = [0, 1];
  return n => {
    if (answers.hasOwnProperty(n)) return answers[n];
    let current = answers.length - 1;
    while (current < n) {
      answers[current + 1] = answers[current - 1] + answers[current];
      current += 1;
    }
    return answers[n];
  };
};
const nthFibClosure = closureMemo();
