// Write a function that sorts an array using the insertion sort algorithm.

// https://en.wikipedia.org/wiki/Insertion_sort

function insertionSort(array) {
  for (let i = 1; i < array.length; i += 1) {
    let j = i;
    while (array[j] < array[j - 1]) {
      let temp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = temp;
      j--;
    }
  }
  return array;
}
console.log(insertionSort([5, 2, 1, 6, 8, 9, 1]));
module.exports = insertionSort;
