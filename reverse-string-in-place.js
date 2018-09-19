const reverseArr = fullArr => {
  const reverse = (arr, start, end) => {
    for (let l = start, r = end - 1; l < r; l += 1, r -= 1) {
      const temp = arr[l];
      arr[l] = arr[r];
      arr[r] = temp;
    }
  };
  let spaceIndex = 0;
  let startIndex = 0;
  let count = 0;
  while (count < 5) {
    spaceIndex = fullArr.indexOf(' ', spaceIndex + 1);
    if (spaceIndex !== -1) {
      reverse(fullArr, startIndex, spaceIndex);
      startIndex = spaceIndex + 1;
    } else {
      spaceIndex = fullArr.length;
      reverse(fullArr, startIndex, spaceIndex);
      break;
    }
    count += 1;
  }
  reverse(fullArr, 0, fullArr.length);
  return fullArr;
};
const message = ['c', 'a', 'k', 'e', ' ', 'p', 'o', 'u', 'n', 'd', ' ', 's', 't', 'e', 'a', 'l'];
console.log(reverseArr(message));
