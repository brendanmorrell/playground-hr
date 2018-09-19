const insertionSort2 = arr => {
  for (let i = 0; i < arr.length; i += 1) {
    let temp = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > temp; j -= 1) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = temp;
  }
  return arr;
};

const data = [5, 4, 3, 2, 1];
console.log(insertionSort2(data));

const insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    let h = i;
    let j = i - 1;
    while (j >= 0 && arr[j] > arr[h]) {
      let temp = arr[h];
      arr[h] = arr[j];
      arr[j] = temp;
      h -= 1;
      j -= 1;
    }
  }
  return arr;
};
console.log(insertionSort([5, 4, 3, 2, 1]));
