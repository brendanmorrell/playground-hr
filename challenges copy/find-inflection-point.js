const inflectionPoint = arr => {
  // citerate through until the word sorted with the next word is different than the two unsorted
  // at that point, word inflection poin tis next word
  let inflectionPoint;
  for (let i = 0; i < arr.length - 1; i++) {
    const current = arr[i];
    const next = arr[i + 1];
    const sorted = [current, next].sort();
    if (sorted[1] === current && sorted[0] === next) {
      inflectionPoint = i + 1;
      break;
    }
  }
  return inflectionPoint;
};
const words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'undulate',
  'xenoepist',
  'asymptote',
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
];

inflectionPoint(words);
