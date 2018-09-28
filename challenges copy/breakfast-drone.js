const findUniqueNumber = arr => {
  return arr.reduce((acc, x) => {
    if (acc.has(x)) acc.delete(x);
    else acc.add(x);
    return acc;
  }, new Set());
};

console.log(findUniqueNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 7, 8, 9, 0]));
// console.log('heyo');
