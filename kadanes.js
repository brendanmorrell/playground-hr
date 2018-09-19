const maxSubArray = arr => {
  let globalMax, localMax;
  globalMax = localMax = arr[0];
  let i = 1;
  while (i < arr.length) {
    localMax = Math.max(arr[i], localMax + arr[i]);
    globalMax = Math.max(localMax, globalMax);
    i += 1;
  }
  return globalMax;
};
console.log(maxSubArray([5, -1, -1, -1, 5]));
