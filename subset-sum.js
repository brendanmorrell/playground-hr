const subsetSum = (arr, n) => {
  let exists = false;
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i];
    if (sum === n) {
      exists = true;
      break;
    }
    for (let j = i + 1; j < arr.length; j++) {
      const element = arr[j];
      sum += element;
      if (sum === n) {
        exists = true;
        break;
      }
    }
  }
  return exists;
};

console.log(subsetSum([1, 2, 3], 7));
