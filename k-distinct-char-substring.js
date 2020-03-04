const func = (k, str) => {
  let max = "";
  for (let i = 0; i < str.length; i += 1) {
    let current = str[i];
    const set = new Set(str[i]);
    for (let j = i + 1; j < str.length; j += 1) {
      set.add(str[j]);
      if (set.size <= k) {
        current += str[j];
        if (current.length > max.length) {
          max = current;
        }
      }
    }
  }
  return max;
};

// at each point, look forward keeping track of unique characters.
// keep var for substring
// if current substring longer then prev, set as current

console.log(func(2, "abcba"));
