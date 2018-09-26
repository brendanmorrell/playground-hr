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

const IS = arr => {
  for (let i = 1; i < arr.length; i++) {
    let j = i;
    let k = j - 1;
    while (k >= 0 && arr[k] > arr[j]) {
      let temp = arr[j];
      arr[j] = arr[k];
      arr[k] = temp;
      j -= 1;
      k -= 1;
    }
  }
  return arr;
};

console.log(IS([8, 2, 6, 12, 768, 1, 3, 5]));

const again = arr => {
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i + 1];
    for (var j = i - 1; j >= 0 && arr[j] > temp; j -= 1) {
      arr[j + 1] = arr[j];
      arr[j] = temp;
    }
  }
  return arr;
};

console.log(again([123, 6, 121, 8, 2, 13, 4, 12]));
