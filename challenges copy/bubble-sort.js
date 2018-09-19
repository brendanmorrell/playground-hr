// Write a function that sorts an array using the bubble sort algorithm

// https://en.wikipedia.org/wiki/Bubble_sort

function bubbleSort(array) {
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < array.length - 1; i++) {
      let elt1 = array[i];
      let elt2 = array[i + 1];
      if (elt2 < elt1) {
        sorted = false;
        array[i] = elt2;
        array[i + 1] = elt1;
      }
    }
  }
  return array;
}

module.exports = bubbleSort;
