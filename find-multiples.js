const findMultiples = (a, b, n) => {
  let small = Math.min(a, b);
  let large = Math.max(a, b);
  let currentSmall = small;
  let currentLarge = large;
  let results = [];
  while (currentSmall <= n || currentLarge <= n) {
    while (currentSmall < currentLarge) {
      if (currentSmall <= n) {
        results.push(currentSmall);
        currentSmall += small;
      }
    }
    if (currentSmall === currentLarge && currentSmall <= n) {
      results.push(currentSmall);
      currentSmall += small;
      currentLarge += large;
    } else if (currentLarge <= n) {
      results.push(currentLarge);
      currentLarge += large;
    }
  }
  return results;
};

console.log(findMultiples(2, 3, 10)); // 2,3,4,6,8,9
